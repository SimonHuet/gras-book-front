import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, makeStyles } from '@material-ui/core';
import { FlagIcon } from 'Components/UI/utils/FlagIcon';

const availableLanguages = [
    { label: 'Français', icon: 'fr', code: 'fr' },
    { label: 'English', icon: 'gb', code: 'en' }
];

const DropdownItemComponent = ({
    languages,
    currentLocale,
    onClick,
    className
}) =>
    languages
        .filter(item => item.code !== currentLocale)
        .map(item => <Box
            className={className}
            key={item.code}
            onClick={() => onClick(item.code)}
            color="inherit"
        >
            <FlagIcon code={item.icon} />
            {item.label}
        </Box>
        );

const LabelComponent = ({ languages, currentLocale, className}) => {
    const language = languages.find(item => item.code === currentLocale);

    return (
        <Box color="inherit" className={className} >
            <FlagIcon code={language.icon} />
            {language.label}
        </Box>
    );
};

const useStyles = makeStyles(theme => ({
    label: {},
    dropdown: {
        flexDirection: "column"
    },
    button: {
        display: 'flex',
    },
}));

export const LanguageSelector = () => {
    const [, i18n] = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);
    const classes = useStyles();

    const onClick = () => {
        setShowDropdown(!showDropdown);
    };

    const onMouseLeave = () => {
        setShowDropdown(false);
    };

    const onChangeLanguage = code => {
        i18n.changeLanguage(code);
    };

    return <Button
        role="group"
        aria-label="Language selector dropdown"
        onClick={onClick}
        onMouseLeave={onMouseLeave}
        color="inherit"
        className={classes.root}
    >
        <LabelComponent languages={availableLanguages} currentLocale={i18n.language} className={classes.label} />

        <div
            aria-labelledby="languageSelector"
            hidden={!showDropdown}
            className={classes.dropdown}
        >
            <DropdownItemComponent
                languages={availableLanguages}
                currentLocale={i18n.language}
                onClick={onChangeLanguage}
                className={classes.button}
            />
        </div>
    </Button>;
};
