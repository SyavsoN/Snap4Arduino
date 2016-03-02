s4aTempDict = {

/*
    Special characters: (see <http://0xcc.net/jsescape/>)
    Ä, ä   \u00c4, \u00e4
    Ö, ö   \u00d6, \u00f6
    Ü, ü   \u00dc, \u00fc
    ß      \u00df
	à      \u00E0
	è      \u00E8
	’      \u2019
*/
    // primitive blocks:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.
        For example:
            'say %s for %n secs'
        can currently not be changed into
            'say %n secs long %s'
        and still work as intended.
        Similarly
            'point towards %dst'
        cannot be changed into
            'point towards %cst'
        without breaking its functionality.
    */

    // arduino:
	
	'digital input':
		'цифровий вхід',

	'digital output':
		'цифровий вихід',

	'PWM':
		'PWM',

	'servo':
		'серво',

	'clockwise':
		'за годинниковою стрілкою',

	'counter-clockwise':
		'проти годинникової стрілки',

	'stopped':
		'зупинено',

	'angle (0-180)':
		'під кутом (0-180)',

    'connect to Arduino':
        'підключитися до Arduino',

    'disconnect Arduino':
        'відключитися від Arduino',

    'Connect Arduino':
        'З\u2019єднатися з Arduino',

    'Disconnect Arduino':
        'Від\u2019єднатися від Arduino',

    'analog reading %analogPin':
        'аналогове значення %analogPin',

    'digital reading %digitalPin':
        'цифрове значення %digitalPin',

    'connect arduino at %port':
        'З\u2019єднатися з arduino використовуючи %port',

    'setup digital pin %digitalPin as %pinMode':
        'налаштувати режим цифрового роз\u2019єму %digitalPin як %pinMode',

    'set digital pin %digitalPin to %b':
        'змінити статус цифрового роз\u2019єму %digitalPin на %b',

    'set servo %servoPin to %servoValue':
        'змінити статус роз\u2019єму серво нa %servoValue',

    'set PWM pin %pwmPin to %n':
        'змінити статус роз\u2019єму PWM %pwmPin на %n',

    'Connecting board at port\n': 
        'З\u2019єднання з платою через порт\n',

    'An Arduino board has been connected. Happy prototyping!':
        'Вдале з\u2019єднання з платою Arduino.\nЦікавих експериментів!',

    'Board was disconnected from port\n':
        'Плату було відєднано від порту\n',

    'It seems that someone pulled the cable!':
        'Sembra che qualcuno ha staccato il cavo!',

    'Error connecting the board.':
        'Errore di connessione alla scheda',

    'There is already a board connected to this sprite':
        'C\'\u00E8 gi\u00E0 una scheda collegata a questo oggetto',

    'Could not connect an Arduino\nNo boards found':
        'Impossibile collegarsi ad Arduino\nNessuna scheda trovata',

    'Could not talk to Arduino in port\n':
        'Impossibile comunicare con Arduino alla porta\n',

    'Check if firmata is loaded.':
        'Verifica che Firmata sia caricato sulla scheda.',

    'An error was detected on the board\n\n':
        'Un errore \u00E8 stato riscontrato sulla scheda\n\n',

    'Board is not connected':
        'La scheda non \u00E8 collegata'

};

// Add attributes to original SnapTranslator.dict.uk
for (var attrname in s4aTempDict) { SnapTranslator.dict.uk[attrname] = s4aTempDict[attrname]; }