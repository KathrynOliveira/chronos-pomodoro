import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

type TypeThemes = 'dark' | 'light'

export function Menu() {
    const [theme, setTheme] = useState<TypeThemes>(() => {
        const storageTheme = localStorage.getItem('theme');
        return storageTheme || 'dark'; // Se não existir no local storage, usa o default 'dark'
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    }

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault(); //Não vai para o link
        setTheme(prevTheme => {// pega o valor anterior
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        } );
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]); // Executa apenas quando o valor de theme muda
    
    return (
        <nav className={styles.menu}>
            <Link className={styles.menuLink} to='/' aria-label="Home" title="Home">
                <HouseIcon/>
            </Link>
            <a className={styles.menuLink} href='#' aria-label="Histórico" title="Histórico">
                <HistoryIcon/>
            </a>
            <a className={styles.menuLink} href='#' aria-label="Configuração" title="Configuração">
                <SettingsIcon/>
            </a>
            <a className={styles.menuLink} href='#' aria-label="Mudar Tema" title="Mudar Tema" onClick={handleThemeChange}>
                {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}