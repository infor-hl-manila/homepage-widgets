/* eslint-disable no-bitwise, no-undef */
// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('cs-CZ', {
  // layout/language
  language: 'cs',
  englishName: 'Czech (Czech Republic)',
  nativeName: 'čeština (Česká republika)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '.', // Infered
      timeSeparator: ':',
      short: 'dd.MM.yyyy', // use four digit year
      medium: 'd. M. yyyy',
      long: 'd. MMMM yyyy',
      full: 'EEEE d. MMMM yyyy',
      month: 'd. MMMM',
      year: 'MMMM yyyy',
      timestamp: 'H:mm',
      datetime: 'dd.MM.yyyy H:mm',
      timezone: 'dd.MM.yyyy H:mm zz',
      timezoneLong: 'dd.MM.yyyy H:mm zzzz'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
      abbreviated: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
      narrow: ['N', 'P', 'Ú', 'S', 'Č', 'P', 'S']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
      abbreviated: ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'H:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['AM', 'PM']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: 'Kč',
  currencyFormat: '### ¤',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '### %',
    minusSign: '-',
    decimal: ',',
    group: ' ',
    groupSizes: [3, 3]
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Copyright &copy; {0} Infor. Všechna práva vyhrazena. Zde použité slovní a grafické značky jsou ochrannými známkami nebo registrovanými ochrannými známkami společnosti Infor nebo jejích partnerů a dceřiných společností. Všechna práva vyhrazena. Všechny ostatní ochranné známky zde uvedené jsou v držení svých příslušných vlastníků.' },
    Actions: { id: 'Actions', value: 'Akce', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Další položky', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Přidat', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'Přidat komentáře', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'Přidat novou kartu', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'Administrativní dovolená', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Vytvořit rozšířený filtr', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Upozornění', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Výstražné zprávy na stránce', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Vše', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Všechny výsledky pro', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Zarovnat dolní okraj', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Zarovnat vodorovně na střed', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Oranžová', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Fialová', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Použít', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'Nabídka', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'Připojit', comment: 'Attach' },
    Available: { id: 'Available', value: 'K dispozici', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Modrá', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Barva pozadí', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Mezi', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Citace', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Tučné', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Se záložkou', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Přidat záložku', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Drobeček', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Prohlížeč', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Odrážkový seznam', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Kalendář', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Kamera', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Storno', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Velká písmena zapnuta', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Vozík', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Na střed', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Zbývající počet znaků: {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Maximální počet znaků ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Chcete-li změnit výběr, použijte klávesy se šipkami.', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'Změnit zobrazení', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'Zaškrtávací políčko', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Zaškrtnuto', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Vymazat', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Vymazat filtr', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'Vymazat formátování', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(Vymazat výběr)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Hodiny', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Zavřít', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Reaguje na kliknutí v editoru', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Kopírovat', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Sbalit', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Sbalit panel aplikace', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Sloupce', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'Komentáře', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'Podnikové volno', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'Komponenta', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Vytvořit', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Dokončeno', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Potvrdit', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Potvrdit zprávy na stránce', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Soubory cookie povoleny', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Obsahuje', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Třída CSS', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Vyjmout', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Datum', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'Den', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'Dny ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: 'Po termínu splnění ({0} dnů)', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: 'Zbývající počet dnů: {0}', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Odstranit', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: 'Zařízení', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Distribuovat vodorovně', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Dokument', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: 'Placené volno za odměnu', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'Řádek byl změněn', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Procházet hierarchii dolů', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Procházet hierarchii nahoru', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Rozbalovací seznam', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Neobsahuje', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Nekončí na', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'Nerovná se', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Nezačíná na', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Dolů', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Stáhnout', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Duplikovat', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Buďto vybráno nebo nevybráno', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Končí na', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Zde vložte komentáře...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Chyba', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Nepovolený typ souboru', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Překročen limit velikosti souboru', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'Překročen limit počtu souborů', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Chybové zprávy na stránce', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'E-mailová adresa je neplatná', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Zelená', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Rozbalit', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Rozbalit panel aplikace', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Rozbalit / Sbalit', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Exportovat jako sešit', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Upravit', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Rovná se', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'Událost', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'Ukončit plné zobrazení', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Export', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Export do Excelu', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Oblíbená položka', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Odeslání souboru. Chcete-li vyhledat soubor, stiskněte klávesu Enter', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'Filtr pole', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'Filtr', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'První stránka', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Složka', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'Zdroj', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'Plné zobrazení', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Přejít vpřed', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Přejít zpět', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Přejít dolů', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Přejít nahoru', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Přejít', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Černá', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Větší než nebo rovno', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Větší než', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Mřížka', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: 'Hodina', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'Hodiny', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'Záhlaví tři', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Záhlaví čtyři', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Nejvyšší', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Domovská stránka', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Zobrazení HTML', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Obrázek', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Import', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Informace', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Informační zprávy na stránce', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'Probíhá', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Vložit', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Vložit odkaz', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Vložit obrázek', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Vložit propojení', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Vložit URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Kurzíva', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Neplatné datum', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Neplatný čas', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Zásoby', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'V rozsahu', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'Je prázdné', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Není prázdné', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Vybrané položky', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Na střed', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Zarovnat doleva', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Zarovnat doprava', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Klíčové slovo', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Spustit', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Poslední stránka', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Vlevo', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'Legenda', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Menší než nebo rovno', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Menší než', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Odkaz', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Načíst', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Načítání', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Národní prostředí', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Uzamčeno', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Odhlásit', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Vyhledat', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Nejnižší', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'E-mail', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Špendlík', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Maximalizovat', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Medián', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Střední', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Nabídka', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Sdílet pomocí Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Minuty', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Minimalizovat', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Mínus', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Mobilní zařízení', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Měsíc', comment: 'As in a date month' },
    More: { id: 'More', value: 'Další...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Další akce', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Přesunout doleva', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Přesunout doprava', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', Upraveno', comment: 'for modified form fields' },
    New: { id: 'New', value: 'Nový', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: 'Nový dokument', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Nová položka', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'Nové okno', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'Následující', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Následující stránka', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Příští měsíc', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Ne', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Žádná data nejsou k dispozici', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Nejsou k dispozici žádná data, chcete-li zobrazit více výsledků, vytvořte nový výběr filtru.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Nejsou k dispozici žádná data, chcete-li zobrazit více výsledků, vytvořte výběr v seznamu výše.', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'Žádné', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'Žádné výsledky', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Normální', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Poznámky', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Nevybráno', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Číslovaný seznam', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'OK', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Otevřít / Zpět / Zavřít', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Otevřít / Zavřít', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'Operační systém', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'Vložit/odebrat číslovaný seznam', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'stránka ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'Stránka {0} z {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Jste na stránce ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'Placené volno', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'Vložit', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>Požadavky na heslo</strong><br>Délka alespoň 10 znaků<br>Alespoň jedno velké písmeno<br>Alespoň jedno malé písmeno<br>Alespoň jeden speciální znak<br>Nesmí obsahovat vaše uživatelské jméno<br>Nesmí být shodné s dříve použitým heslem<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Heslo se musí shodovat', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Špička', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'Čekající', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Přizpůsobit sloupce', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'Plán', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'Platforma', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Období', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Stiskem šipky dolů vyberte datum', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Stiskem kláves Shift+F10 otevřete kontextovou nabídku.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Předchozí', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Minulý měsíc', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Předchozí stránka', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Tisk', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Rozsah', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: 'Počet záznamů na stránku: {0}', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Opakovat', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Přeuspořádat řádky', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Aktualizovat', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'Žádost o volno', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'Vyžadováno', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Reset', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Resetovat na výchozí', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Výsledek', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Výsledky', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Zarovnat doprava', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Zarovnat doprava', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Vpravo', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Role', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Výška řádku', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Červená', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Spustit filtr', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'Stejné okno', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'Uložit', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Uložit aktuální zobrazení', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Uložená zobrazení', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'Rozvrh', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'Sekundy', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Vyhledat', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Vyhledat název sloupce', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Vyhledat ve složce', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Vyhledat v seznamu', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Výběr', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'Vybrat den', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'Vybráno', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Vybrat vše', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Odeslat', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Nastavit čas', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Nastavení', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Nízká', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Zobrazit řádek filtru', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Zobrazit méně', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Zobrazit více', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: 'Nemocenská', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'Šedá', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: 'Snímek {0} z {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Snímky {0} a {1} z {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Ovládací prvek objektu', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Nejvyšší hodnota ovládacího prvku objektu', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Nejnižší hodnota ovládacího prvku objektu', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Přejít na hlavní obsah', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'Stav', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'Začíná na', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: 'Dokončené kroky: {0} z {1}', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Přeškrtnuté', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Řadit vzestupně', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Řadit sestupně', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Řadit sestupně', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Řadit vzestupně', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Dolní index', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Horní index', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Karty...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Špendlík', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Vysoká', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Cíl', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'Týmová událost', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Test výchozích nastavení národního prostředí', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Barva textu', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Odeslání souborů přetažením', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Chcete-li odeslat soubory, přetáhněte je myší nebo je <span class=“hyperlink“>vyberte</span>.', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Zrušit odesílání tohoto souboru', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Zavřít tuto chybu', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Zavřít tuto chybu', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Časovač', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'Komu', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'Dnes', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Přepnout tučný text', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Přepnout záhlaví 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Přepnout záhlaví 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Přepnout text kurzívou', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Přepnout podtržený text', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Panel nástrojů', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Zarovnat nahoru', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Celkem', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Součty', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Sbalit strom', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Rozbalit strom', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Tyrkysová', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Nahoru', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: 'Nadcházející události', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'Nadcházející placené volno', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: 'Odeslat', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Nedostupné datum', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Podtržení', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Zpět', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Odemčeno', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Vložit/odebrat odrážkový seznam', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Tento obsah není dostupný, protože využívá funkce, které aktuální verze vašeho prohlížeče nepodporuje.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'URL', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Vyberte pomocí kláves se šipkami.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Vyhledávejte pomocí klávesy Enter nebo šipky dolů.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Uživatel', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Uživatelský profil', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'Verze IDS', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Zarovnat svisle na střed', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Zobrazit zdroj', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Zobrazit vizuálně', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'Týden', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'Rok', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Ano', comment: 'On a dialog button' }
  }
});
