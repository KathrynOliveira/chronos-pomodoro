import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type TypeThemes = 'dark' | 'light'

export function Menu() {
    const [theme, setTheme] = useState<TypeThemes>("dark");

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault(); //Não vai para o link
        // setTheme(theme === 'dark'? 'light' : 'dark');
        // document.body.className = theme;
    }

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