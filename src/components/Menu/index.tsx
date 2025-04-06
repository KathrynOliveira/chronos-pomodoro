import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type TypeThemes = 'dark' | 'light'

export function Menu() {
    const [theme, setTheme] = useState<TypeThemes>("dark");

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault(); //Não vai para o link
        setTheme(prevTheme => {// pega o valor anterior
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        } );
    }
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]); // Executa apenas quando o valor de theme muda
    
    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href='#' aria-label="Home" title="Home">
                <HouseIcon/>
            </a>
            <a className={styles.menuLink} href='#' aria-label="Histórico" title="Histórico">
                <HistoryIcon/>
            </a>
            <a className={styles.menuLink} href='#' aria-label="Configuração" title="Configuração">
                <SettingsIcon/>
            </a>
            <a className={styles.menuLink} href='#' aria-label="Mudar Tema" title="Mudar Tema" onClick={handleThemeChange}>
                <SunIcon/>
            </a>
        </nav>
    )
}