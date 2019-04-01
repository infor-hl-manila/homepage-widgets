/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('sl-SI', {
  // layout/language
  language: 'sl',
  englishName: 'Slovenian (Slovenia)',
  nativeName: 'slovenski (Slovenija)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '.', // Infered
      timeSeparator: '.',
      short: 'd. MM. yyyy', // use four digit year
      medium: 'd. MMM yyyy',
      long: 'dd. MMMM yyyy',
      full: 'EEEE, dd. MMMM yyyy',
      month: 'd. MMMM',
      year: 'MMMM yyyy',
      timestamp: 'HH.mm.ss',
      datetime: 'd. MM. yyyy HH.mm'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['nedelja', 'ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota'],
      abbreviated: ['ned', 'pon', 'tor', 'sre', 'čet', 'pet', 'sob'],
      narrow: ['n', 'p', 't', 's', 'č', 'p', 's']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december'],
      abbreviated: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'HH.mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['dop.', 'pop.']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: 'Sk',
  currencyFormat: '#,##0.00 ¤',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '#,##0 %',
    minusSign: '-',
    decimal: ',',
    group: '.'
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Copyright &copy; {0} Infor. Vse pravice pridržane. Besedne in oblikovne znamke, navedene v tej publikaciji, so blagovne znamke in/ali registrirane blagovne znamke družbe Infor in/ali povezanih hčerinskih podjetij in podružnic. Vse pravice pridržane. Vse druge blagovne znamke, navedene v tem dokumentu, so last drugih podjetij.' },
    Actions: { id: 'Actions', value: 'Dejanja', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Dodatne postavke', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Dodaj', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'Dodaj komentar', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'Dodaj nov zavihek', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'Dopust', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Ustvari napredni filter', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Opozorilo', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Opozorilno(-a) obvestilo(-a) na strani', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Vse', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Vsi rezultati za', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Poravnaj spodaj', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Vodoravna središčna poravnava', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Jantarna', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Ametist', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Uporabi', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'Meni', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'Priloži', comment: 'Attach' },
    Available: { id: 'Available', value: 'Na voljo', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Azurna', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Barva ozadja', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Med', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Ponudba', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Krepko', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Zaznamek ustvarjen', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Ustvari zaznamek', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Sledenje poti', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Brskalnik', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Označen seznam', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Koledar', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Fotoaparat', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Prekliči', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Tipka Caps Lock vklopljena', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Voziček', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Središče', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Št. preostalih znakov {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Največje št. znakov ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Za spremembo izbire uporabite puščične tipke.', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'Spremeni pogled', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'Potrditveno polje', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Potrjeno', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Počisti', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Počisti filter', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'Počisti oblikovanje', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(Počisti izbor)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Ura', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Zapri', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Je mogoče klikniti v urejevalniku', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Kopiraj', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Strni', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Strni pladenj aplikacij', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Stolpci', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'Komentarji', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'Dopust podjetja', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'Komponenta', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Sestavi', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Dokončano', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Potrdi', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Potrdi sporočilo(-a) na strani', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Piškotki omogočeni', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Vsebuje', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Razred CSS', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Izreži', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Datum', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'Dan', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'Dnevi ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: 'Zapadlo pred toliko dnevi: {0}', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: 'Preostalih dni: {0}', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Izbriši', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: 'Naprava', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Porazdeli vodoravno', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Dokument', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: 'Letni dopust', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'Vrstica se je spremenila', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Prikaži na ravni z več podrobnostmi', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Prikaži na ravni z manj podrobnostmi', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Spustni seznam', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Ne vsebuje', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Se ne konča z', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'Ni enako', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Se ne začne z', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Navzdol', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Prenesi', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Podvoji', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Izbrano ali ni izbrano', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Se konča z', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Tukaj vnesite komentarje ...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Napaka', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Vrsta datoteke ni dovoljena', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Omejitev velikosti datoteke je bila presežena', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'Omejitev največjega dovoljenega števila datotek je bila presežena', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Sporočilo(-a) o napaki na strani', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'Neveljaven e-poštni naslov', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Smaragdna', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Razširi', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Razširi pladenj aplikacij', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Razširi/strni', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Izvozi kot preglednico', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Uredi', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Je enako', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'Dogodek', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'Izhod iz celotnega pogleda', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Izvozi', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Izvozi v Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Priljubljen', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Prenos datoteke. Pritisnite Enter za iskanje datoteke', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'Filter polja', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'Filter', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Prva stran', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Mapa', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'Iz', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'Celotni pogled', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Pojdi naprej', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Pojdi nazaj', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Pojdi navzdol', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Pojdi navzgor', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Pojdi', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Grafitna', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Večji od ali enak', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Večji od', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Mreža', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: 'Ura', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'Ure', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'Tretji naslov', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Četrti naslov', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Najvišji', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Domača stran', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Pogled HTML', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Slika', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Uvozi', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Informacije', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Informacijsko(-a) sporočilo(-a) na strani', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'Poteka', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Vstavi', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Vstavi povezavo', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Vstavi sliko', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Vstavi povezavo', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Vstavi URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Ležeče', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Neveljaven datum', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Neveljaven čas', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Zaloga', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'V obsegu', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'Je prazen', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Ni prazen', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Izbrani elementi', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Središče', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Poravnaj levo', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Poravnaj desno', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Ključna beseda', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Zaženi', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Zadnja stran', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Levo', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'Legenda', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Manjši od ali enak', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Manjši od', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Poveži', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Naloži', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Nalaganje', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Območne nastavitve', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Zaklenjeno', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Odjavi se', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Iskanje', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Najmanjša', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'Pošta', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Pin', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Povečaj', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Mediana', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Srednje', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Meni', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Daj v skupno rabo z Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Minute', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Pomanjšaj', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Minus', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Mobilni telefon', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Mesec', comment: 'As in a date month' },
    More: { id: 'More', value: 'Več ...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Več dejanj ...', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Premakni v levo', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Premakni v desno', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', spremenjeno', comment: 'for modified form fields' },
    New: { id: 'New', value: 'Novo', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: 'Nov dokument', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Nov element', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'Novo okno', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'Naslednji', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Naslednja stran', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Naslednji mesec', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Ne', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Na voljo ni podatkov', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Na voljo ni podatkov; za ogled več rezultatov izberite nov filter.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Na voljo ni podatkov; za ogled več rezultatov izberite z zgornjega seznama.', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'Brez', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'Ni rezultatov ', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Običajno', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Opombe', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Ni izbrano', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Oštevilči seznam', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'V redu', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Odpri/Nazaj/Zapri', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Odpri/Zapri', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'Operacijski sistem', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'Vstavi/odstrani oštevilčen seznam', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'stran ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'Stran {0} od {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Trenutno ste na strani ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'Plačan dopust', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'Prilepi', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>Geslo mora</strong><br>biti dolgo vsaj 10 znakov<br>Mora vsebovati vsaj en velik znak<br>Mora vsebovati vsaj en mali znak<br>Mora vsebovati vsaj en poseben znak<br>Ne sme vsebovati vašega uporabniškega imena<br>Ne sme biti vaše predhodno uporabljeno geslo', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Geslo se mora ujemati', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Največja vrednost', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'Čakanje', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Prilagodi stolpce', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'Načrt', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'Platforma', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Obdobje', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Pritisnite puščico dol za izbiro datuma', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Pritisnite Shift + F10, da odprete priročni meni.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Nazaj', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Prejšnji mesec', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Prejšnja stran', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Natisni', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Obseg', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} Zapisov na stran', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Uveljavi', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Preuredi vrstice', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Osveži', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'Zahteva za dopust', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'Obvezno', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Ponastavi', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Ponastavi na privzeto', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Rezultat', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Rezultati', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Poravnaj desno', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Poravnaj desno', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Desno', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Vloge', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Višina vrstice', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Rubinasta', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Zaženi filter', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'Enako okno', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'Shrani', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Shrani trenutni pogled', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Shranjeni pogledi', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'Razpored', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'Sekunde', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Išči', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Poišči ime stolpca', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Poišči v mapi', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Preišči seznam', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Izberi', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'Izberi dan', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'Izbrano', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Izberi vse', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Pošlji', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Nastavi čas', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Nastavitve', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Kratko', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Prikaži vrstico filtra', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Pokaži manj', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Pokaži več', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: 'Bolniška', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'Skrilasta', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: 'Diapozitiv {0} od {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Diapozitiva {0} in {1} od {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Ročica za', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Največja vrednost ročice za', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Najmanjša vrednost ročice za', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Preskoči na glavno vsebino', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'Stanje', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'Začne se z', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: '{0} od {1} korakov dokončanih', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Prečrtano', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Razvrsti naraščajoče', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Razvrsti padajoče', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Razvrsti navzdol', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Razvrsti navzgor', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Podpisano', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Nadpisano', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Zavihki ...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Pin', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Visoko', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Cilj', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'Skupinski dogodek', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Test Locale Defaults', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Barva besedila', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Povlecite in spustite datoteke za prenos', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Povlecite in spustite ali <span class="hyperlink">Izberite datoteke</span> za prenos', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Prekliči prenašanje te datoteke', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Zapri to napako', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Zapri to napako', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Časovnik', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'Za', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'Danes', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Preklopi krepko besedilo', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Preklopi naslov 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Preklopi naslov 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Preklopi ležeče besedilo', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Preklopi podčrtano besedilo', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Orodna vrstica', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Poravnaj zgoraj', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Skupaj', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Skupaj', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Strni drevo', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Razširi drevo', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Turkizna', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Navzgor', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: 'Prihajajoči dogodki', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'Prihajajoč dopust', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: 'Prenos', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Datum ni na voljo', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Podčrtano', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Razveljavi', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Odklenjeno', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Vstavi/odstrani oštevilčen seznam', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Ta vsebina ni na voljo, ker vaša trenutna različica brskalnika ne podpira njenih funkcij.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'URL', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Za izbiro uporabite puščične tipke.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Za iskanje uporabite tipko Enter ali puščico dol.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Uporabnik', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Uporabniški profil', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'Različica IDS', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Navpična središčna poravnava', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Ogled vira', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Vizualni pogled', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'Teden', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'Leto', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Da', comment: 'On a dialog button' }
  }
});
