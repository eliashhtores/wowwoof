const lang = navigator.language || navigator.userLanguage;
if (lang.slice(0, 2) != 'es')
    window.location.replace('appointment_en.html');