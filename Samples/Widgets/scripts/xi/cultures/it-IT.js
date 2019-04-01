/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('it-IT', {
  // layout/language
  language: 'it',
  englishName: 'Italian (Italy)',
  nativeName: 'italiano (Italia)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '/', // Infered
      timeSeparator: ':',
      short: 'dd/MM/yyyy', // use four digit year
      medium: 'dd/MMM/yyyy',
      long: 'dd MMMM yyyy',
      full: 'EEEE d MMMM yyyy',
      month: 'd MMMM',
      year: 'MMMM yyyy',
      timestamp: 'HH:mm:ss',
      datetime: 'M/d/yyyy HH:mm'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
      abbreviated: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
      narrow: ['D', 'L', 'M', 'M', 'G', 'V', 'S']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
      abbreviated: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'HH:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['AM', 'PM']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: '€',
  currencyFormat: '#,##0.00 ¤',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '#,##0%',
    minusSign: '-',
    decimal: ',',
    group: '.'
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Copyright &copy; {0} Infor. Tutti i diritti riservati. I marchi, ovvero il testo e gli elementi grafici che li costituiscono, citati nel presente documento sono marchi o marchi registrati di Infor e/o delle relative società affiliate o controllate. Tutti i diritti riservati. Tutti gli altri marchi citati appartengono ai rispettivi proprietari.' },
    Actions: { id: 'Actions', value: 'Azioni', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Elementi aggiuntivi', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Aggiungi', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'Aggiungi commenti', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'Aggiungi nuova scheda', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'Assenza retribuita', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Crea filtro avanzato', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Avviso', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Messaggi di avviso a pagina', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Tutto', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Tutti i risultati per', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Allinea in basso', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Allinea al centro orizzontalmente', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Ambra', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Ametista', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Applica', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'Menu', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'Allega', comment: 'Attach' },
    Available: { id: 'Available', value: 'Disponibile', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Azzurro', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Colore sfondo', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Compreso tra', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Blocca offerta', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Grassetto', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Aggiunto ai segnalibri', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Aggiungi ai segnalibri', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Breadcrumb', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Browser', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Elenco puntato', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Calendario', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Fotocamera', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Annulla', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Bloc Maiusc attivato', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Carrello', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Centra', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Caratteri rimanenti: {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Numero massimo di caratteri ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Per modificare la selezione, utilizzare i tasti freccia.', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'Cambia visualizzazione', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'Casella di controllo', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Selezionato', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Cancella', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Annulla filtro', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'Cancella formattazione', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(Annulla selezione)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Orologio', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Chiudi', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Cliccabile nell\'editor', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Copia', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Comprimi', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Comprimi barra applicazioni', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Colonne', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'Commenti', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'Ferie aziendali', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'Componente', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Componi', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Completato', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Conferma', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Messaggi di conferma a pagina', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Cookie attivati', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Contiene', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Classe CSS', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Taglia', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Data', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'Giorno', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'Giorni ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: 'Scaduto da {0} giorni', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '{0} giorni rimanenti', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Elimina', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: 'Dispositivo', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Distribuisci orizzontalmente', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Documento', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: 'Ferie/Permessi discrezionali', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'La riga è stata modificata', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Visualizza dettagli', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Nascondi dettagli', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Elenco a discesa', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Non contiene', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Non finisce con', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'Diverso da', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Non inizia con', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Giù', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Scarica', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Duplica', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Selezionati o Non selezionati', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Finisce con', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Immettere i commenti qui...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Errore', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Tipo di file non consentito', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'È stata superata la dimensione massima file', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'È stato superato il numero massimo di file consentiti', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Messaggi di errore nella pagina', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'Indirizzo e-mail non valido', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Smeraldo', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Espandi', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Espandi barra applicazioni', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Espandi/Comprimi', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Esporta come foglio di lavoro', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Modifica', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Uguale a', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'Evento', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'Esci da Visualizzazione a schermo intero', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Esporta', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Esporta in Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Preferito', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Caricamento file. Premere Invio per individuare un file.', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'Filtro campo', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'Filtro', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Prima pagina', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Cartella', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'Da', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'Visualizzazione a schermo intero', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Vai avanti', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Torna indietro', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Vai giù', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Vai su', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Vai', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Grafite', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Maggiore o uguale a', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Maggiore di', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Griglia', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: 'Ora', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'Ore', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'Intestazione 3', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Intestazione 4', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Valore massimo', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Home', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Visualizzazione HTML', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Immagine', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Importa', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Informazioni', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Messaggi informativi nella pagina', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'In corso', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Inserisci', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Inserisci ancoraggio', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Inserisci immagine', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Inserisci collegamento', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Inserisci URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Corsivo', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Data non valida', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Ora non valida', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Scorte', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'Nell\'intervallo', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'È vuoto', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Non è vuoto', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Elementi selezionati', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Centra', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Allinea a sinistra', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Allinea a destra', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Parola chiave', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Avvia', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Ultima pagina', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Sinistra', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'Legenda', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Minore o uguale a', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Minore di', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Collegamento', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Carica', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Caricamento...', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Lingua', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Bloccato', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Disconnetti', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Ricerca', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Valore minimo', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'Posta', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Puntina', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Ingrandisci', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Mediano', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Media', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Menu', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Condividi con Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Minuti', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Riduci a icona', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Meno', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Dispositivo portatile', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Mese', comment: 'As in a date month' },
    More: { id: 'More', value: 'Altro...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Altre azioni', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Sposta a sinistra', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Sposta a destra', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', modificato', comment: 'for modified form fields' },
    New: { id: 'New', value: 'Nuovo', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: 'Nuovo documento', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Nuovo elemento', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'Nuova finestra', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'Successivo', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Pagina successiva', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Mese successivo', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'No', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Nessun dato disponibile', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Nessun dato disponibile. Riprovare selezionando un altro filtro.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Nessun dato disponibile. Riprovare selezionando una voce dell\'elenco riportato sopra.', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'Nessuno', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'Nessun risultato', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Normale', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Note', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Non selezionato', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Elenco numerato', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'OK', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Apri/Indietro/Chiudi', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Apri/Chiudi', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'Sistema operativo', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'Inserisci/Rimuovi elenco numerato', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'pagina ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'Pagina {0} di {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Pagina corrente: ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'Assenze retribuite', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'Incolla', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>La password deve soddisfare i seguenti requisiti</strong><br>Avere una lunghezza minima di 10 caratteri<br>Includere almeno un carattere maiuscolo<br>Includere almeno un carattere minuscolo<br>Contenere un carattere speciale<br>Non contenere il nome utente<br>Non essere una password già utilizzata in precedenza<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'La password deve corrispondere', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Picco', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'In attesa', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Personalizza colonne', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'Piano', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'Piattaforma', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Periodo', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Premere il tasto Freccia giù per selezionare una data.', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Premere Maiusc+F10 per aprire il menu contestuale.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Precedente', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Mese precedente', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Pagina precedente', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Stampa', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Intervallo', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} record per pagina', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Ripeti', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Riordina righe', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Aggiorna', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'Richiesta di permesso/ferie', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'Obbligatorio', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Reimposta', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Reimposta predefinito', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Risultato', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Risultati', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Allinea a destra', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Allinea a destra', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Destra', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Ruoli', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Altezza riga', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Rubino', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Esegui filtro', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'Stessa finestra', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'Salva', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Salva visualizzazione corrente', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Visualizzazioni salvate', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'Pianificazione', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'Secondi', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Ricerca', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Cerca nome colonna', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Cerca nella cartella', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Elenco di ricerca', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Seleziona', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'Seleziona giorno', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'Selezionato', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Seleziona tutto', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Invia', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Imposta ora', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Impostazioni', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Ridotta', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Mostra riga filtro', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Mostra meno elementi', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Mostra più elementi', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: 'Assenze per malattia', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'Lavagna', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: 'Diapositiva {0} di {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Diapositive {0} e {1} di {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Puntatore per', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Puntatore intervallo massimo per', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Puntatore intervallo minimo per', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Passa a contenuto principale', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'Stato', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'Inizia con', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: '{0} di {1} passaggi completato/i', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Barrato', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Ordinamento crescente', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Ordinamento decrescente', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Ordinamento decrescente', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Ordinamento crescente', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Pedice', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Apice', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Schede...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Puntina', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Aumentata', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Destinazione', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'Evento team', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Test su valori predefiniti lingua', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Colore testo', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Selezionare e trascinare file da caricare', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Selezionare e trascinare o usare <span class="hyperlink">Seleziona file</span> per caricare i file', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Annulla caricamento file corrente', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Chiudi errore', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Chiudi errore', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Timer', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'A', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'Oggi', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Attiva/Disattiva testo grassetto', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Attiva/Disattiva intestazione 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Attiva/Disattiva intestazione 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Attiva/Disattiva testo corsivo', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Attiva/Disattiva testo sottolineato', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Barra degli strumenti', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Allineamento in alto', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Totale', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Totali', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Comprimi struttura', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Espandi struttura', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Turchese', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Su', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: 'Prossimi eventi', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'Prossimi permessi/ferie', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: 'Carica', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Data non disponibile', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Sottolineato', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Annulla', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Sbloccato', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Inserisci/Rimuovi elenco puntato', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Questo contenuto non è disponibile perché utilizza funzioni non supportate nella versione del browser in uso.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'URL', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Effettuare una selezione utilizzando i tasti freccia.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Per effettuare una ricerca, premere Invio o il tasto Freccia giù.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Utente', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Profilo utente', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'Versione IDS', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Allineamento verticale al centro', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Visualizzazione origine', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Visualizzazione contesto visivo', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'Settimana', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'Anno', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Sì', comment: 'On a dialog button' }
  }
});
