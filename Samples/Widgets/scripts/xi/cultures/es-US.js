/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('es-US', {
  // layout/language
  language: 'es',
  englishName: 'Spanish (United States)',
  nativeName: 'Español (Estados Unidos)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '/', // Infered
      timeSeparator: ':',
      short: 'M/d/yyyy', // use four digit year
      medium: 'MMM d, yyyy',
      long: 'd de MMMM de yyyy',
      full: 'EEEE, d de MMMM de yyyy',
      month: 'MMMM d',
      year: 'MMMM de yyyy',
      timestamp: 'h:mm:ss a',
      datetime: 'M/d/yyyy h:mm a'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      abbreviated: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
      narrow: ['D', 'L', 'M', 'X', 'J', 'V', 'S']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      abbreviated: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'h:mm a',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['AM', 'PM']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: '$',
  currencyFormat: '¤#,##0.00',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '#,##0 %',
    minusSign: '-',
    decimal: '.',
    group: ','
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Copyright &copy; {0} Infor. Todos los derechos están reservados. Las marcas denominativas y figurativas mencionadas a continuación son marcas comerciales y marcas comerciales registradas de Infor y/o sus empresas filiales y subsidiarias.' },
    Actions: { id: 'Actions', value: 'Acciones', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Elementos adicionales', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Añadir', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'Añadir comentarios', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'Añadir nueva ficha', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'Permiso administrativo', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Crear filtro avanzado', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Alerta', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Mensajes de alerta en la página', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Todo', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Todos los resultados para', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Alinear en la parte inferior', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Alinear horizontalmente en centro', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Ámbar', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Amatista', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Aplicar', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'Menú', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'Adjuntar', comment: 'Attach' },
    Available: { id: 'Available', value: 'Disponible', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Celeste', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Color de fondo', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Entre', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Cita en bloque', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Negrita', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Señalado con marcador', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Señalar con marcador', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Ruta de navegación', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Explorador', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Lista de viñetas', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Calendario', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Cámara', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Cancelar', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Bloqueo de mayúsculas activo', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Cesta', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Centrar', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Se permiten {0} caracteres más', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Número máximo de caracteres ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Para cambiar la selección utilice las teclas de dirección.', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'Cambiar vista', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'Casilla', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Activado', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Borrar', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Borrar filtro', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'Borrar formato', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(Borrar selección)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Reloj', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Cerrar', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Punto interactivo en el editor', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Copiar', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Contraer', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Contraer bandeja de aplicación', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Columnas', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'Comentarios', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'Vacaciones de la empresa', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'Componente', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Redactar', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Completado', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Confirmar', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Mensajes de confirmación en la página', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Cookies habilitados', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Contiene', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Clase CSS', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Cortar', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Fecha', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'Día', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'Días ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: 'Días de retraso: {0}', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: 'Días restantes: {0}', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Eliminar', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: 'Dispositivo', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Distribuir horizontalmente', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Documento', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: 'Tiempo libre opcional', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'La fila ha cambiado', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Más detalles', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Menos detalles', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Lista desplegable', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'No contiene', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'No acaba en', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'No es igual a', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'No empieza por', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Abajo', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Descargar', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Duplicar', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Lo seleccionado y no seleccionado', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Acaba en', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Introduzca aquí sus comentarios...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Error', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'El tipo de archivo no está permitido', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Se ha excedido el límite de tamaño de archivo', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'Se ha excedido el máximo de archivos permitidos', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Mensajes de error en la página', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'Dirección de correo electrónico no válida', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Esmeralda', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Expandir', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Expandir bandeja de aplicación', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Expandir/Contraer', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Exportar a hoja de cálculo', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Editar', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Es igual a', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'Evento', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'Salir de vista completa', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Exportar', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Exportar a Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Favorito', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Carga de archivo. Pulse Entrar para examinar un archivo.', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'Filtro de campo', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'Filtro', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Primera página', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Carpeta', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'De', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'Vista completa', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Avanzar', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Retroceder', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Bajar', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Subir', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Ir', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Grafito', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Mayor que o igual a', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Mayor que', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Cuadrícula', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: 'Hora', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'Horas', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'Encabezado tres', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Encabezado cuatro', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Mayor', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Inicio', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Vista HTML', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Imagen', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Importar', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Información', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Mensajes de información en la página', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'En curso', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Insertar', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Insertar delimitador', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Insertar imagen', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Insertar vínculo', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Insertar URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Cursiva', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Fecha no válida', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Formato de hora no válido', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Inventario', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'Dentro del rango', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'Esta vacío', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'No está vacío', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Elementos seleccionados', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Centrar', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Alinear a la izquierda', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Alinear a la derecha', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Palabra clave', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Iniciar', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Última página', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Izquierda', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'Leyenda', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Menor que o igual a', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Menor que', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Vínculo', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Cargar', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Cargando', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Configuración regional', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Bloqueado', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Cerrar sesión', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Búsqueda', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Inferior', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'Correo', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Marcar', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Maximizar', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Mediana', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Media', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Menú', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Compartir con Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Minutos', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Minimizar', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Menos', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Móvil', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Mes', comment: 'As in a date month' },
    More: { id: 'More', value: 'Más...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Más acciones', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Desplazar a la izquierda', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Desplazar a la derecha', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', Modificado', comment: 'for modified form fields' },
    New: { id: 'New', value: 'Nuevo', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: 'Nuevo documento', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Nuevo elemento', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'Nueva ventana', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'Siguiente', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Siguiente página', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Siguiente mes', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'No', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'No hay datos disponibles.', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'No hay datos disponibles. Cree un nuevo filtro para ver más resultados.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'No hay datos disponibles. Haga una selección en la lista anterior para ver más resultados.', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'Ninguno', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'Ningún resultado', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Normal', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Notas', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Sin seleccionar', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Lista numerada', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'Aceptar', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Abrir/Atrás/Cerrar', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Abrir/Cerrar', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'Sistema operativo', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'Insertar/Quitar lista numerada', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'página ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'Página {0} de {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Se encuentra en la página ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'Vacaciones remuneradas', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'Pegar', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>La contraseña debe:</strong><br>Tener como mínimo 10 caracteres<br>Tener al menos una mayúscula<br>Tener al menos una minúscula<br>Incluir un carácter especial<br>Evitar el nombre del usuario<br>Evitar una contraseña ya utilizada<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Las contraseñas deben coincidir', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Máximo', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'Pendiente', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Personalizar columnas', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'Plan', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'Plataforma', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Período', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Pulse la flecha abajo para seleccionar una fecha', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Pulse la tecla de mayúsculas + F10 para abrir el menú contextual.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Anterior', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Mes anterior', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Página anterior', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Imprimir', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Intervalo', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} registros por página', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Rehacer', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Reordenar filas', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Actualizar', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'Solicitud de tiempo libre', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'Obligatorio', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Restablecer', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Restablecer valores predeterminados', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Resultado', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Resultados', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Alinear a la derecha', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Alinear a la derecha', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Derecha', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Roles', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Altura de fila', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Rubí', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Ejecutar filtro', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'Misma ventana', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'Guardar', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Guardar vista actual', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Vistas guardadas', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'Programación', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'Segundos', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Buscar', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Buscar nombre de columna', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Buscar en carpeta', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Buscar en lista', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Seleccionar', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'Seleccionar un día', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'Seleccionado', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Seleccionar todo', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Enviar', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Establecer hora', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Configuración', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Baja', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Mostrar fila de filtro', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Mostrar menos', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Mostrar más', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: 'Tiempo de enfermedad', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'Pizarra', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: 'Diapositiva {0} de {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Diapositivas {0} y {1} de {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Manipulador para', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Manipulador del intervalo máximo para', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Manipulador del intervalo mínimo para', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Saltar a contenido principal', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'Estado', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'Empieza por', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: '{0} de {1} pasos completados', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Tachado', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Orden ascendente', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Orden descendente', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Orden descendente', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Orden ascendente', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Subíndice', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Superíndice', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Fichas...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Marcar', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Alta', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Destino', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'Evento de equipo', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Test Locale Defaults', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Color de texto', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Arrastrar y colocar archivos que cargar', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Arrastrar y colocar o <span class="hyperlink">Seleccionar archivos</span> que cargar', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Cancelar la carga de este archivo', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Cerrar este mensaje', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Cerrar este mensaje', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Cronómetro', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'Hasta', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'Hoy', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Alternar texto en negrita', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Alternar encabezado 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Alternar encabezado 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Alternar texto en cursiva', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Alternar texto subrayado', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Barra de herramientas', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Alinear en la parte superior', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Total', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Totales', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Contraer árbol', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Expandir árbol', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Turquesa', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Arriba', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: 'Próximos eventos', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'Próximo tiempo libre', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: 'Cargar', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Fecha no disponible', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Subrayar', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Deshacer', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Desbloqueado', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Insertar/Quitar lista de viñetas', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Este contenido no está disponible porque utiliza características que no son compatibles con la versión del explorador actual.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'URL', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Usar teclas de dirección para seleccionar.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Para la búsqueda utilice Entrar o Flecha abajo.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Usuario', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Perfil de usuario', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'Versión de IDS', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Alinear verticalmente en centro', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Ver código fuente', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Ver resultado visual', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'Semana', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'Año', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Sí', comment: 'On a dialog button' }
  }
});
