// import material-ui components
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// object to save the language
const translations = {
    'de': {
        greeting: 'Hallo, mein Name ist Melanie Junker und ich bin ein Data Engineer'
    },
    'en': {
        greeting: 'Hello, my name is Melanie Junker and I am a Data Engineer'
    }
    
};

// function to setup the language
function setLanguage(language) {
    document.getElementById('greeting').textContent = translations[language].greeting;
}

const LanguageDropdown = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="right">
            <Button className="dropdown-trigger" onClick={handleClick}>
                Language
            </Button>
            <Menu
                id="languageDropdown"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { setLanguage('de'); handleClose(); }}>Deutsch</MenuItem>
                <MenuItem onClick={() => { setLanguage('en'); handleClose(); }}>English</MenuItem>
            </Menu>
        </div>
    );
};

// Initialisierung von Material-UI-Komponenten
document.addEventListener('DOMContentLoaded', function () {
    // Rendern der LanguageDropdown-Komponente
    ReactDOM.render(<LanguageDropdown />, document.getElementById('languageDropdownContainer'));
});
