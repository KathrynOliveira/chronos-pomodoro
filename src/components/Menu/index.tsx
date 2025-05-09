import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'dark' | 'light';
export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
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
            <RouterLink className={styles.menuLink} href='/' aria-label="Home" title="Home">
                <HouseIcon/>
            </RouterLink>
            <RouterLink className={styles.menuLink} href='/history' aria-label="Histórico" title="Histórico">
                <HistoryIcon/>
            </RouterLink>
            <RouterLink className={styles.menuLink} href='/settings' aria-label="Configuração" title="Configuração">
                <SettingsIcon/>
            </RouterLink>
            <a className={styles.menuLink} href='#' aria-label="Mudar Tema" title="Mudar Tema" onClick={handleThemeChange}>
                {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}