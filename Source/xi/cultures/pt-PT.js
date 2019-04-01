/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('pt-PT', {
  // layout/language
  language: 'pt',
  englishName: 'Portuguese (Portugal)',
  nativeName: 'Português (Europeu)',
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
      medium: 'dd/MM/yyyy',
      long: 'd de MMMM de yyyy',
      full: 'EEEE, d de MMMM de y',
      month: 'd de MMMM',
      year: 'MMMM de yyyy',
      timestamp: 'HH:mm:ss',
      datetime: 'dd/MM/yyyy HH:mm'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
      abbreviated: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
      narrow: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      abbreviated: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'HH:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['da manhã', 'da tarde']
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
    group: ' '
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Copyright &copy; {0} Infor. Todos os direitos reservados. A palavra e as marcas de conceção aqui estabelecidas são marcas comerciais e/ou marcas comerciais registadas da Infor e/ou respetivas afiliadas e subsidiárias. Todos os direitos reservados. Todas as outras marcas comerciais aqui apresentadas são da propriedade dos respetivos proprietários.' },
    Actions: { id: 'Actions', value: 'Ações', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Itens adicionais', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Adicionar', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'Adicionar comentários', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'Adicionar novo separador', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'Licença administrativa', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Criar filtro avançado', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Alerta', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Mensagens de alerta na página', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Tudo', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Todos os resultados para', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Alinhar pela parte inferior', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Centrar pelo alinhamento horizontal', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Âmbar', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Ametista', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Aplicar', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'Menu', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'Anexar', comment: 'Attach' },
    Available: { id: 'Available', value: 'Disponível', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Azul-celeste', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Cor de fundo', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Entre', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Trecho em bloco', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Negrito', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Adicionado aos marcadores', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Marcar este', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Trilho', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Navegador', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Lista com marcas', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Calendário', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Câmara', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Cancelar', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Caps Lock ativado', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Carrinho', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Centrar', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Caracteres restantes {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Contagem máxima de caracteres de ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Para alterar a seleção, utilize as teclas de seta.', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'Alterar vista', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'Caixa de verificação', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Marcado', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Limpar', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Limpar filtro', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'Limpar formatação', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(Limpar seleção)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Relógio', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Fechar', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Clicável no editor', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Copiar', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Contrair', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Contrair tabuleiro de aplicações', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Colunas', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'Comentários', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'Feriado da empresa', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'Componente', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Compor', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Concluído', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Confirmar', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Mensagens de confirmação na página', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Cookies ativados', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Contém', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Classe de CSS', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Cortar', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Data', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'Dia', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'Dias ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: '{0} Dias em atraso', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '{0} Dias restantes', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Eliminar', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: 'Dispositivo', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Distribuir horizontalmente', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Documento', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: 'Tempo livre opcional', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'A linha foi alterada', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Desagregar', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Agregar', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Lista pendente', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Não contém', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Não termina com', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'Não é igual', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Não começa com', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Para baixo', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Transferir', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Duplicar', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Selecionado ou não selecionado', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Termina com', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Introduzir comentários aqui...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Erro', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Tipo de ficheiro não permitido', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Limite do tamanho de ficheiro excedido', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'Limite máximo de ficheiros permitidos excedido', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Mensagens de erro na página', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'Endereço de correio eletrónico não válido', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Esmeralda', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Expandir', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Expandir tabuleiro de aplicações', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Expandir/Contrair', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Exportar como folha de cálculo', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Editar', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Igual a', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'Evento', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'Sair da vista completa', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Exportar', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Exportar para Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Favorito', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Carregamento de ficheiros. Premir Enter para pesquisar um ficheiro', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'Filtro de campos', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'Filtrar', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Primeira página', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Pasta', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'De', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'Vista completa', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Avançar', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Retroceder', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Ir para baixo', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Ir para cima', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Ir', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Grafite', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Superior ou igual a', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Superior a', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Grelha', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: 'Hora', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'Horas', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'Título três', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Título quatro', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Máximo', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Início', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Vista de HTML', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Imagem', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Importar', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Info', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Mensagens de informação na página', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'Em curso', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Inserir', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Inserir âncora', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Inserir imagem', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Inserir ligação', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Inserir URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Itálico', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Data não válida', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Hora não válida', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Inventário', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'No intervalo', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'Está vazio', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Não está vazio', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Itens selecionados', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Centrar', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Alinhar à esquerda', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Alinhar à direita', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Palavra-chave', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Iniciar', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Última página', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Esquerda', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'Legenda', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Inferior ou igual a', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Inferior a', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Ligação', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Carregar', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'A carregar', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Configuração regional', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Bloqueado', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Terminar sessão', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Pesquisa', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Mínimo', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'Correio', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Afixar', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Maximizar', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Mediano', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Médio', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Menu', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Partilhar com Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Minutos', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Minimizar', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Menos', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Telemóvel', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Mês', comment: 'As in a date month' },
    More: { id: 'More', value: 'Mais...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Mais ações', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Mover para a esquerda', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Mover para a direita', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', Modificado', comment: 'for modified form fields' },
    New: { id: 'New', value: 'Novo(a)', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: 'Novo documento', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Novo item', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'Nova janela', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'Seguinte', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Página seguinte', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Mês seguinte', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Não', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Não existem dados disponíveis', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Não existem dados disponíveis. Efetue uma nova seleção de filtro para ver mais resultados.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Não existem dados disponíveis. Efetue uma seleção na lista acima para ver mais resultados.', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'Nenhum(a)', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'Nenhum resultado', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Normal', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Notas', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Não selecionado', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Lista numerada', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'OK', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Abrir/Retroceder/Fechar', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Abrir/Fechar', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'Sistema operativo', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'Inserir/Remover lista numerada', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'página ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'Página {0} de {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Atualmente, está na página ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'Tempo livre pago', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'Colar', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>A palavra-passe</strong><br>Tem de ter, pelo menos, 10 caracteres<br>Tem de ter, pelo menos, um carácter maiúsculo<br>Tem de ter, pelo menos, um carácter minúsculo<br>Tem de ter um carácter especial<br>Não pode ter o seu nome de utilizador<br>Não pode ser uma palavra-passe utilizada anteriormente<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'A palavra-passe tem de corresponder', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Pico', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'Pendente', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Personalizar colunas', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'Plano', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'Plataforma', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Período', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Premir a Seta para baixo para selecionar uma data', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Premir Shift+F10 para abrir o menu de contexto.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Anterior', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Mês anterior', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Página anterior', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Imprimir', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Intervalo', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} registos por página', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Refazer', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Reordenar linhas', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Atualizar', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'Solicitar tempo livre', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'Requerido', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Repor', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Repor a predefinição', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Resultado', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Resultados', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Alinhar à direita', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Alinhar à direita', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Direita', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Funções', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Altura da linha', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Rubi', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Executar filtro', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'Mesma janela', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'Guardar', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Guardar vista atual', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Vistas guardadas', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'Agenda', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'Segundos', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Procurar', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Procurar um nome de coluna', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Procurar na pasta', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Lista de procura', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Selecionar', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'Selecionar um dia', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'Selecionado', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Selecionar tudo', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Enviar', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Definir hora', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Definições', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Abreviado', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Mostrar linha do filtro', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Mostrar menos', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Mostrar mais', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: 'Doença', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'Ardósia', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: 'Diapositivo {0} de {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Diapositivos {0} e {1} de {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Identificador para', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Intervalo máximo do identificador para', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Intervalo mínimo do identificador para', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Avançar para conteúdo principal', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'Estado', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'Começa com', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: '{0} de {1} passos concluídos', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Rasurado', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Ordenação ascendente', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Ordenação descendente', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Ordenar para baixo', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Ordenar para cima', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Inferior à linha', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Superior à linha', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Separadores...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Afixar', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Altura', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Destino', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'Evento da equipa', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Predefinições de configuração regional de teste', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Cor do texto', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Arrastar e largar ficheiros para carregar', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Arrastar e largar ou <span class="hyperlink">Selecionar ficheiros</span> para carregar', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Cancelar o carregamento deste ficheiro', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Fechar este erro', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Fechar este erro', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Temporizador', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'Para', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'Hoje', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Comutar texto a negrito', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Comutar título 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Comutar título 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Comutar texto em itálico', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Comutar texto sublinhado', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Barra de ferramentas', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Alinhamento superior', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Total', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Totais', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Contrair árvore', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Expandir árvore', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Azul-turquesa', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Para cima', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: 'Eventos futuros', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'Tempo livre futuro', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: 'Carregar', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Data indisponível', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Sublinhado', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Anular', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Desbloqueado', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Inserir/Remover lista com marcas', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Este conteúdo não está disponível, porque utiliza funções não suportadas pela sua versão atual do navegador.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'Url', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Utilize as teclas de seta para selecionar.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Utilize as teclas Enter ou Seta para baixo para pesquisar.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Utilizador', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Perfil do utilizador', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'Versão de IDS', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Centrar pelo alinhamento vertical', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Ver origem', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Ver visual', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'Semana', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'Ano', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Sim', comment: 'On a dialog button' }
  }
});
