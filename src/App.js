import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Html from "./components/HTMLPAGES/Html";
import Htmlhome from "./components/HTMLPAGES/Htmlhome";
import Editor from "./components/HTMLPAGES/Editor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Basic from "./components/HTMLPAGES/Basic";
import Elements from "./components/HTMLPAGES/Elements";
import Attribute from "./components/HTMLPAGES/Attribute";
import Heading from "./components/HTMLPAGES/Heading";
import Css from "./components/Css";
import Javascript from "./components/Javascript";
import Sql from "./components/SQL PAGES/Sql";
import Python from "./components/PYTHON PAGES/Python.js";
import Java from "./components/Java";
import Php from "./components/Php";
import JQuery from "./components/JQUERYPAGES/JQuery.js";

import Git from "./components/Git";
import Wordpress from "./components/Wordpress";
import DigitalMarketing from "./components/DigitalMarketing";
import Paragraph from "./components/HTMLPAGES/Paragraph";
import Style from "./components/HTMLPAGES/Style";
import Formatting from "./components/HTMLPAGES/Formatting";
import Quotation from "./components/HTMLPAGES/Quotation";
import Comments from "./components/HTMLPAGES/Comments";
import Colors from "./components/HTMLPAGES/Colors";
import CSS2 from "./components/HTMLPAGES/CSS2";
import Links1 from "./components/HTMLPAGES/Links1";
import Images1 from "./components/HTMLPAGES/Images1";
import Favicon from "./components/HTMLPAGES/Favicon";
import Pagetitle from "./components/HTMLPAGES/Pagetitle";
import Tables from "./components/HTMLPAGES/Tables";
import Lists from "./components/HTMLPAGES/Lists";
import Div from "./components/HTMLPAGES/Div";
import BlockInline from "./components/HTMLPAGES/BlockInline";
import HTMLClass from "./components/HTMLPAGES/HTMLClass";
import HTMLId from "./components/HTMLPAGES/HTMLId";
import HTMLIframes from "./components/HTMLPAGES/HTMLIframes";
import HTMLJavascript from "./components/HTMLPAGES/HTMLJavascript";
import HTMLFilePaths from "./components/HTMLPAGES/HTMLFilePaths";
import HTMLHead from "./components/HTMLPAGES/HTMLHead";
import HtmlLayout from "./components/HTMLPAGES/HtmlLayout";
import HtmlResponsive from "./components/HTMLPAGES/HtmlResponsive";
import HtmlSemantics from "./components/HTMLPAGES/HtmlSemantics";
import HtmlForms from "./components/HTMLPAGES/HtmlForms";
import HtmlFormElements from "./components/HTMLPAGES/HtmlFormElements";
import HtmlInputTypes from "./components/HTMLPAGES/HtmlInputTypes";
import HtmlInputAttributes from "./components/HTMLPAGES/HtmlInputAttributes";
import HtmlFormAttributes from "./components/HTMLPAGES/HtmlFormAttributes";
import HtmlMultimedia from "./components/HTMLPAGES/HtmlMultimedia";
import HtmlAudio from "./components/HTMLPAGES/HtmlAudio";
import HtmlVideo from "./components/HTMLPAGES/HtmlVideo";
import HtmlYouTube from "./components/HTMLPAGES/HtmlYouTube";
import SqlIntroduction from "./components/SQL PAGES/SqlIntroduction";
import SqlSyntax from "./components/SQL PAGES/SqlSyntax ";
import SqlSelect from "./components/SQL PAGES/SqlSelect";
import SqlSelectDistinct from "./components/SQL PAGES/SqlSelectDistinct ";
import SqlWhere from "./components/SQL PAGES/SqlWhere ";
import SqlOrderBy from "./components/SQL PAGES/SqlOrderBy ";
import SqlAnd from "./components/SQL PAGES/SqlAnd ";
import SqlOr from "./components/SQL PAGES/SqlOr ";
import SqlNot from "./components/SQL PAGES/SqlNot ";
import SqlInsert from "./components/SQL PAGES/SqlInsert";
import SqlNullValues from "./components/SQL PAGES/SqlNullValues ";
import SqlUpdate from "./components/SQL PAGES/SqlUpdate ";
import SqlDelete from "./components/SQL PAGES/SqlDelete ";
import SqlTop from "./components/SQL PAGES/SqlTop ";
import SqlAggregateFunctions from "./components/SQL PAGES/SqlAggregateFunctions ";
import SqlMinMax from "./components/SQL PAGES/SqlMinMax ";
import SqlCount from "./components/SQL PAGES/SqlCount ";
import SqlSum from "./components/SQL PAGES/SqlSum ";
import SqlAvg from "./components/SQL PAGES/SqlAvg ";
import SqlLike from "./components/SQL PAGES/SqlLike ";
import SqlWildcards from "./components/SQL PAGES/SqlWildcards ";
import SqlInOperator from "./components/SQL PAGES/SqlInOperator ";
import SqlBetween from "./components/SQL PAGES/SqlBetween ";
import SqlAliases from "./components/SQL PAGES/SqlAliases ";
import SqlJoins from "./components/SQL PAGES/SqlJoins ";
import SqlInnerJoin from "./components/SQL PAGES/SqlInnerJoin ";
import SqlLeftJoin from "./components/SQL PAGES/SqlLeftJoin ";
import SqlRightJoin from "./components/SQL PAGES/SqlRightJoin";
import SqlFullJoin from "./components/SQL PAGES/SqlFullJoin ";
import SqlSelfJoin from "./components/SQL PAGES/SqlSelfJoin ";
import SqlUnion from "./components/SQL PAGES/SqlUnion ";
import SqlUnionAll from "./components/SQL PAGES/SqlUnionAll ";
import SqlGroupBy from "./components/SQL PAGES/SqlGroupBy ";
import SqlHaving from "./components/SQL PAGES/SqlHaving ";
import SqlExists from "./components/SQL PAGES/SqlExists ";
import SqlAnyAll from "./components/SQL PAGES/SqlAnyAll ";
import SqlSelectInto from "./components/SQL PAGES/SqlSelectInto ";
import SqlInsertIntoSelect from "./components/SQL PAGES/SqlInsertIntoSelect.js";
import SqlCase from "./components/SQL PAGES/SqlCase.js";
import SqlNullFunctions from "./components/SQL PAGES/SqlNullFunctions .js";
import SqlStoredProcedure from "./components/SQL PAGES/SqlStoredProcedure .js";
import SqlComments from "./components/SQL PAGES/SqlComments .js";
import SqlOperators from "./components/SQL PAGES/SqlOperators.js";
import SqlCreateDatabase from "./components/SQL PAGES/SqlCreateDatabase .js";
import SqlDropDatabase from "./components/SQL PAGES/SqlDropDatabase .js";
import SqlBackupDatabase from "./components/SQL PAGES/SqlBackupDatabase .js";
import SqlCreateTable from "./components/SQL PAGES/SqlCreateTable .js";
import SqlAlterTable from "./components/SQL PAGES/SqlAlterTable .js";
import SqlDropTable from "./components/SQL PAGES/SqlDropTable .js";
import SqlConstraints from "./components/SQL PAGES/SqlConstraints .js";
import SqlNotNull from "./components/SQL PAGES/SqlNotNull.js";
import SqlUnique from "./components/SQL PAGES/SqlUnique .js";
import SqlPrimaryKey from "./components/SQL PAGES/SqlPrimaryKey .js";
import SqlForeignKey from "./components/SQL PAGES/SqlForeignKey .js";
import SqlCheck from "./components/SQL PAGES/SqlCheck .js";
import SqlDefault from "./components/SQL PAGES/SqlDefault .js";
import SqlIndex from "./components/SQL PAGES/SqlIndex .js";
import SqlAutoIncrement from "./components/SQL PAGES/SqlAutoIncrement.js";
import SqlDates from "./components/SQL PAGES/SqlDates .js";
import SqlViews from "./components/SQL PAGES/SqlViews .js";
import SqlInjection from "./components/SQL PAGES/SqlInjection .js";
import SqlHosting from "./components/SQL PAGES/SqlHosting .js";
import SqlDataTypes from "./components/SQL PAGES/SqlDataTypes .js";
import PythonIntroduction from "./components/PYTHON PAGES/PythonIntroduction .js";
import PythonGettingStarted from "./components/PYTHON PAGES/PythonGettingStarted .js";
import PythonSyntax from "./components/PYTHON PAGES/PythonSyntax .js";
import PythonComments from "./components/PYTHON PAGES/PythonComments .js";
import PythonVariables from "./components/PYTHON PAGES/PythonVariables .js";
import PythonDataTypes from "./components/PYTHON PAGES/PythonDataTypes .js";
import PythonNumbers from "./components/PYTHON PAGES/PythonNumbers .js";
import PythonCasting from "./components/PYTHON PAGES/PythonCasting .js";
import PythonStrings from "./components/PYTHON PAGES/PythonStrings .js";
import PythonBooleans from "./components/PYTHON PAGES/PythonBooleans .js";
import PythonOperators from "./components/PYTHON PAGES/PythonOperators .js";
import PythonLists from "./components/PYTHON PAGES/PythonLists .js";
import PythonTuples from "./components/PYTHON PAGES/PythonTuples .js";
import PythonSets from "./components/PYTHON PAGES/PythonSets .js";
import PythonDictionaries from "./components/PYTHON PAGES/PythonDictionaries .js";
import PythonIfElse from "./components/PYTHON PAGES/PythonIfElse .js";
import PythonLoops from "./components/PYTHON PAGES/PythonLoops .js";
import PythonMatch from "./components/PYTHON PAGES/PythonMatch .js";
import PythonWhileLoops from "./components/PYTHON PAGES/PythonWhileLoops .js";
import PythonForLoops from "./components/PYTHON PAGES/PythonForLoops .js";
import PythonFunctions from "./components/PYTHON PAGES/PythonFunctions .js";
import PythonLambda from "./components/PYTHON PAGES/PythonLambda .js";
import PythonArray from "./components/PYTHON PAGES/PythonArray .js";
import PythonOOP from "./components/PYTHON PAGES/PythonOOP .js";
import PythonClassesObjects from "./components/PYTHON PAGES/PythonClassesObjects .js";
import PythonInheritance from "./components/PYTHON PAGES/PythonInheritance .js";
import PythonIterators from "./components/PYTHON PAGES/PythonIterators .js";
import PythonPolymorphism from "./components/PYTHON PAGES/PythonPolymorphism .js";
import PythonScope from "./components/PYTHON PAGES/PythonScope .js";
import PythonModules from "./components/PYTHON PAGES/PythonModules .js";
import PythonDates from "./components/PYTHON PAGES/PythonDates .js";
import PythonMath from "./components/PYTHON PAGES/PythonMath .js";
import PythonJSON from "./components/PYTHON PAGES/PythonJSON .js";
import PythonRegex from "./components/PYTHON PAGES/PythonRegex .js";
import PythonPip from "./components/PYTHON PAGES/PythonPip .js";
import PythonTryExcept from "./components/PYTHON PAGES/PythonTryExcept .js";
import PythonStringFormatting from "./components/PYTHON PAGES/PythonStringFormatting .js";
import PythonUserInput from "./components/PYTHON PAGES/PythonUserInput .js";
import PythonVirtualEnv from "./components/PYTHON PAGES/PythonVirtualEnv .js";
import PythonFileHandling from "./components/PYTHON PAGES/PythonFileHandling .js";
import PythonReadFile from "./components/PYTHON PAGES/PythonReadFile .js";
import PythonWriteFile from "./components/PYTHON PAGES/PythonWriteFile .js";
import PythonDeleteFile from "./components/PYTHON PAGES/PythonDeleteFile .js";
import PythonNumpy from "./components/PYTHON PAGES/PythonNumpy .js";
import PythonPandas from "./components/PYTHON PAGES/PythonPandas .js";
import PythonScipy from "./components/PYTHON PAGES/PythonScipy .js";
import PythonDjango from "./components/PYTHON PAGES/PythonDjango .js";
import React from "./components/REACT PAGES/React.js";
import ReactIntroduction from "./components/REACT PAGES/ReactIntroduction .js";
import ReactGetStarted from "./components/REACT PAGES/ReactGetStarted .js";
import ReactFirstApp from "./components/REACT PAGES/ReactFirstApp .js";
import ReactRenderHtml from "./components/REACT PAGES/ReactRenderHtml .js";
import ReactUpgrade from "./components/REACT PAGES/ReactUpgrade .js";
import ReactES6 from "./components/REACT PAGES/ReactES6 .js";
import ReactJSX from "./components/REACT PAGES/ReactJSX .js";
import ReactJSXExpressions from "./components/REACT PAGES/ReactJSXExpressions .js";
import ReactJSXAttributes from "./components/REACT PAGES/ReactJSXAttributes .js";
import ReactJSXIfStatement from "./components/REACT PAGES/ReactJSXIfStatement .js";
import ReactComponents from "./components/REACT PAGES/ReactComponents .js";
import ReactClass from "./components/REACT PAGES/ReactClass .js";
import ReactProps from "./components/REACT PAGES/ReactProps .js";
import ReactPropsDestructuring from "./components/REACT PAGES/ReactPropsDestructuring .js";
import ReactPropsChildren from "./components/REACT PAGES/ReactPropsChildren .js";
import ReactEvents from "./components/REACT PAGES/ReactEvents .js";
import ReactConditional from "./components/REACT PAGES/ReactConditional .js";
import ReactLists from "./components/REACT PAGES/ReactLists .js";
import ReactForms from "./components/REACT PAGES/ReactForms .js";
import ReactFormSubmit from "./components/REACT PAGES/ReactFormSubmit .js";
import ReactTextarea from "./components/REACT PAGES/ReactTextarea .js";
import ReactSelect from "./components/REACT PAGES/ReactSelect .js";
import ReactMultipleInput from "./components/REACT PAGES/ReactMultipleInput .js";
import ReactCheckbox from "./components/REACT PAGES/ReactCheckbox .js";
import ReactRadio from "./components/REACT PAGES/ReactRadio .js";
import ReactPortal from "./components/REACT PAGES/ReactPortal .js";
import ReactSuspense from "./components/REACT PAGES/ReactSuspense .js";
import ReactCssStyle from "./components/REACT PAGES/ReactCssStyle.js";
import ReactCssModules from "./components/REACT PAGES/ReactCssModules .js";
import ReactCssInJs from "./components/REACT PAGES/ReactCssInJs .js";
import ReactRouter from "./components/REACT PAGES/ReactRouter .js";
import ReactTransitions from "./components/REACT PAGES/ReactTransitions .js";
import ReactForwardRef from "./components/REACT PAGES/ReactForwardRef .js";
import ReactHOC from "./components/REACT PAGES/ReactHOC .js";
import ReactSass from "./components/REACT PAGES/ReactSass .js";
import ReactHooks from "./components/REACT PAGES/ReactHooks .js";
import ReactUseState from "./components/REACT PAGES/ReactUseState .js";
import ReactUseEffect from "./components/REACT PAGES/ReactUseEffect .js";
import ReactUseContext from "./components/REACT PAGES/ReactUseContext .js";
import ReactUseRef from "./components/REACT PAGES/ReactUseRef .js";
import ReactUseReducer from "./components/REACT PAGES/ReactUseReducer .js";
import ReactUseCallback from "./components/REACT PAGES/ReactUseCallback .js";
import ReactUseMemo from "./components/REACT PAGES/ReactUseMemo .js";
import ReactCustomHooks from "./components/REACT PAGES/ReactCustomHooks .js";
import JqueryIntroduction from "./components/JQUERYPAGES/JqueryIntroduction .js";
import JqueryGetStarted from "./components/JQUERYPAGES/JqueryGetStarted .js";
import JquerySyntax from "./components/JQUERYPAGES/JquerySyntax .js";
import JquerySelectors from "./components/JQUERYPAGES/JquerySelectors .js";
import JqueryEvents from "./components/JQUERYPAGES/JqueryEvents .js";
import JqueryHideShow from "./components/JQUERYPAGES/JqueryHideShow .js";
import JqueryFade from "./components/JQUERYPAGES/JqueryFade .js";
import JquerySlide from "./components/JQUERYPAGES/JquerySlide .js";
import JqueryAnimation from "./components/JQUERYPAGES/JqueryAnimation .js";
import JqueryStop from "./components/JQUERYPAGES/JqueryStop .js";
import JqueryCallback from "./components/JQUERYPAGES/JqueryCallback .js";
import JqueryChaining from "./components/JQUERYPAGES/JqueryChaining .js";
import JqueryGet from "./components/JQUERYPAGES/JqueryGet .js";
import JquerySet from "./components/JQUERYPAGES/JquerySet .js";
import JqueryAdd from "./components/JQUERYPAGES/JqueryAdd .js";
import JqueryRemove from "./components/JQUERYPAGES/JqueryRemove.js";
import JqueryCssClasses from "./components/JQUERYPAGES/JqueryCssClasses .js";
import JqueryCss from "./components/JQUERYPAGES/JqueryCss .js";
import JqueryDimensions from "./components/JQUERYPAGES/JqueryDimensions .js";
import JqueryTraversing from "./components/JQUERYPAGES/JqueryTraversing .js";
import JqueryAncestors from "./components/JQUERYPAGES/JqueryAncestors.js";
import JqueryDescendant from "./components/JQUERYPAGES/JqueryDescendant .js";
import JquerySiblings from "./components/JQUERYPAGES/JquerySiblings .js";
import JqueryFiltering from "./components/JQUERYPAGES/JqueryFiltering .js";
import JqueryAjaxIntro from "./components/JQUERYPAGES/JqueryAjaxIntro .js";
import JqueryLoad from "./components/JQUERYPAGES/JqueryLoad .js";
import JqueryGetPost from "./components/JQUERYPAGES/JqueryGetPost .js";
import JqueryNoConflict from "./components/JQUERYPAGES/JqueryNoConflict .js";
import JqueryFilters from "./components/JQUERYPAGES/JqueryFilters .js";
import Excel from "./components/EXCELPAGES/Excel.js";
import ExcelIntroduction from "./components/EXCELPAGES/ExcelIntroduction .js";
import ExcelGetStarted from "./components/EXCELPAGES/ExcelGetStarted .js";
import ExcelOverview from "./components/EXCELPAGES/ExcelOverview .js";
import ExcelSyntax from "./components/EXCELPAGES/ExcelSyntax .js";
import ExcelRanges from "./components/EXCELPAGES/ExcelRanges .js";
import ExcelFill from "./components/EXCELPAGES/ExcelFill .js";
import ExcelMoveCell from "./components/EXCELPAGES/ExcelMoveCell .js";
import ExcelAddCells from "./components/EXCELPAGES/ExcelAddCells .js";
import ExcelDeleteCells from "./components/EXCELPAGES/ExcelDeleteCells .js";
import ExcelUndoRedo from "./components/EXCELPAGES/ExcelUndoRedo .js";
import ExcelFormulas from "./components/EXCELPAGES/ExcelFormulas .js";
import ExcelRelativeReference from "./components/EXCELPAGES/ExcelRelativeReference .js";
import ExcelAbsoluteReference from "./components/EXCELPAGES/ExcelAbsoluteReference .js";
import ExcelArithmeticOperators from "./components/EXCELPAGES/ExcelArithmeticOperators .js";
import ExcelParentheses from "./components/EXCELPAGES/ExcelParentheses .js";
import ExcelFunctions from "./components/EXCELPAGES/ExcelFunctions .js";
import ExcelFormatting from "./components/EXCELPAGES/ExcelFormatting .js";
import ExcelFormatPainter from "./components/EXCELPAGES/ExcelFormatPainter .js";
import ExcelFormatColors from "./components/EXCELPAGES/ExcelFormatColors .js";
import ExcelFormatFonts from "./components/EXCELPAGES/ExcelFormatFonts .js";
import ExcelFormatBorders from "./components/EXCELPAGES/ExcelFormatBorders .js";
import ExcelFormatNumbers from "./components/EXCELPAGES/ExcelFormatNumbers .js";
import ExcelFormatGrids from "./components/EXCELPAGES/ExcelFormatGrids .js";
import ExcelFormatSettings from "./components/EXCELPAGES/ExcelFormatSettings .js";
import ExcelSort from "./components/EXCELPAGES/ExcelSort .js";
import ExcelFilter from "./components/EXCELPAGES/ExcelFilter .js";
import ExcelTables from "./components/EXCELPAGES/ExcelTables .js";
import ExcelConditionalFormat from "./components/EXCELPAGES/ExcelConditionalFormat .js";
import ExcelHighlightCellRules from "./components/EXCELPAGES/ExcelHighlightCellRules .js";
import Sidebar from "./components/Sidebar.js";
import SidebarSql from "./components/SidebarSql.js";
import SidebarPython from "./components/SidebarPython.js";
import SidebarReact from "./components/SidebarReact.js";
import SidebarJquery from "./components/SidebarJquery.js";
import ExcelTopBottomRules from "./components/EXCELPAGES/ExcelTopBottomRules .js";
import ExcelDataBars from "./components/EXCELPAGES/ExcelDataBars .js";
import ExcelColorScales from "./components/EXCELPAGES/ExcelColorScales .js";
import ExcelIconSets from "./components/EXCELPAGES/ExcelIconSets .js";
import ExcelManageRules from "./components/EXCELPAGES/ExcelManageRules .js";
import ExcelCharts from "./components/EXCELPAGES/ExcelCharts .js";
import ExcelTablePivotIntro from "./components/EXCELPAGES/ExcelTablePivotIntro .js";
import ExcelCasePokeMart from "./components/EXCELPAGES/ExcelCasePokeMart .js";
import ExcelCasePokeMartStyling from "./components/EXCELPAGES/ExcelCasePokeMartStyling .js";
import ExcelAnd from "./components/EXCELPAGES/ExcelAnd .js";
import ExcelAverage from "./components/EXCELPAGES/ExcelAverage .js";
import ExcelAverageIf from "./components/EXCELPAGES/ExcelAverageIf .js";
import ExcelAverageIfs from "./components/EXCELPAGES/ExcelAverageIfs .js";
import ExcelConcat from "./components/EXCELPAGES/ExcelConcat .js";
import ExcelCount from "./components/EXCELPAGES/ExcelCount .js";
import ExcelCountA from "./components/EXCELPAGES/ExcelCountA .js";
import ExcelCountBlank from "./components/EXCELPAGES/ExcelCountBlank .js";
import ExcelCountIF from "./components/EXCELPAGES/ExcelCountIF .js";
import ExcelCountIFS from "./components/EXCELPAGES/ExcelCountIFS .js";
import ExcelIF from "./components/EXCELPAGES/ExcelIF .js";
import ExcelIFS from "./components/EXCELPAGES/ExcelIFS .js";
import ExcelLEFT from "./components/EXCELPAGES/ExcelLEFT .js";
import ExcelLOWER from "./components/EXCELPAGES/ExcelLOWER .js";
import ExcelMAX from "./components/EXCELPAGES/ExcelMAX .js";
import ExcelMEDIAN from "./components/EXCELPAGES/ExcelMEDIAN .js";
import ExcelMIN from "./components/EXCELPAGES/ExcelMIN .js";
import ExcelMODE from "./components/EXCELPAGES/ExcelMODE .js";
import ExcelNPV from "./components/EXCELPAGES/ExcelNPV .js";
import ExcelOR from "./components/EXCELPAGES/ExcelOR .js";
import ExcelRAND from "./components/EXCELPAGES/ExcelRAND .js";
import ExcelRIGHT from "./components/EXCELPAGES/ExcelRIGHT .js";
import ExcelSTDEVP from "./components/EXCELPAGES/ExcelSTDEVP .js";
import ExcelSTDEVS from "./components/EXCELPAGES/ExcelSTDEVS .js";



const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "navbar",
      element: <Navbar />,
    },

      {
      path:"sidebarjquery",
      element:<SidebarJquery />
    },
       {
      path:"sidebarreact",
      element:<SidebarReact />
    },




     {
      path:"sidebarpython",
      element:<SidebarPython />
    },

    {
      path:"sidebarsql",
      element:<SidebarSql />
    },

     {
      path: "sidebar",
      element: <Sidebar />,
    },

    {
      path: "footer",
      element: <Footer />,
    },

    {
      path: "navbar",
      element: <Navbar />,
    },

    {
      path: "footer",
      element: <Footer />,
    },

    {
      path: "/html",
      element: <Html />,
    },

    {
      path: "css",
      element: <Css />,
    },
    {
      path: "javascript",
      element: <Javascript />,
    },
    {
      path: "sql",
      element: <Sql />,
    },
    {
      path: "PythonTutorial",
      element: <Python />,
    },
    {
      path: "java",
      element: <Java />,
    },
    {
      path: "php",
      element: <Php />,
    },

    {
      path: "git",
      element: <Git />,
    },

    {
      path: "wordpress",
      element: <Wordpress />,
    },
    {
      path: "digitalmarketing",
      element: <DigitalMarketing />,
    },
    {
      path: "/htmlhome",
      element: <Htmlhome />,
    },

    {
      path: "editor",
      element: <Editor />,
    },

    {
      path: "basic",
      element: <Basic />,
    },

    {
      path: "elements",
      element: <Elements />,
    },

    {
      path: "/attribute",
      element: <Attribute />,
    },

    {
      path: "heading",
      element: <Heading />,
    },

    {
      path: "paragraph",
      element: <Paragraph />,
    },

    {
      path: "style",
      element: <Style />,
    },

    {
      path: "formatting",
      element: <Formatting />,
    },

    {
      path: "quotation",
      element: <Quotation />,
    },

    {
      path: "comments",
      element: <Comments />,
    },

    {
      path: "colors",
      element: <Colors />,
    },

    {
      path: "css2",
      element: <CSS2 />,
    },

    {
      path: "links",
      element: <Links1 />,
    },

    {
      path: "images",
      element: <Images1 />,
    },

    {
      path: "favicon",
      element: <Favicon />,
    },

    {
      path: "pagetitle",
      element: <Pagetitle />,
    },

    {
      path: "tables",
      element: <Tables />,
    },

    {
      path: "lists",
      element: <Lists />,
    },

    {
      path: "divs",
      element: <Div />,
    },

    {
      path: "blockinline",
      element: <BlockInline />,
    },

    {
      path: "htmlclass",
      element: <HTMLClass />,
    },

    {
      path: "htmlid",
      element: <HTMLId />,
    },

    {
      path: "htmliframes",
      element: <HTMLIframes />,
    },

    {
      path: "htmljavascript",
      element: <HTMLJavascript />,
    },

    {
      path: "htmlfilepath",
      element: <HTMLFilePaths />,
    },

    {
      path: "htmlhead",
      element: <HTMLHead />,
    },

    {
      path: "htmllayout",
      element: <HtmlLayout />,
    },

    {
      path: "htmlresponsive",
      element: <HtmlResponsive />,
    },

    {
      path: "htmlsemantic",
      element: <HtmlSemantics />,
    },

    {
      path: "htmlform",
      element: <HtmlForms />,
    },

    {
      path: "htmlformelement",
      element: <HtmlFormElements />,
    },

    {
      path: "htmlinput",
      element: <HtmlInputTypes />,
    },

    {
      path: "htmlattribute",
      element: <HtmlInputAttributes />,
    },

    {
      path: "htmlformattribute",
      element: <HtmlFormAttributes />,
    },

    {
      path: "htmlmultimedia",
      element: <HtmlMultimedia />,
    },

    {
      path: "htmlaudio",
      element: <HtmlAudio />,
    },

    {
      path: "htmlvideo",
      element: <HtmlVideo />,
    },

    {
      path: "htmlyoutube",
      element: <HtmlYouTube />,
    },

    {
      path: "sqlintroduction",
      element: <SqlIntroduction />,
    },

    {
      path: "sqlsyntax",
      element: <SqlSyntax />,
    },

    {
      path: "sqlselect",
      element: <SqlSelect />,
    },

    {
      path: "sqlselectdistinct",
      element: <SqlSelectDistinct />,
    },

    {
      path: "sqlwhere",
      element: <SqlWhere />,
    },

    {
      path: "sqlorderby",
      element: <SqlOrderBy />,
    },

    {
      path: "sqland",
      element: <SqlAnd />,
    },

    {
      path: "sqlor",
      element: <SqlOr />,
    },

    {
      path: "sqlnot",
      element: <SqlNot />,
    },

    {
      path: "sqlinsert",
      element: <SqlInsert />,
    },

    {
      path: "sqlnullvalues",
      element: <SqlNullValues />,
    },

    {
      path: "sqlupdate",
      element: <SqlUpdate />,
    },

    {
      path: "sqldelete",
      element: <SqlDelete />,
    },

    {
      path: "sqltop",
      element: <SqlTop />,
    },

    {
      path: "sqlaggregatefunction",
      element: <SqlAggregateFunctions />,
    },

    {
      path: "sqlminmax",
      element: <SqlMinMax />,
    },

    {
      path: "sqlcount",
      element: <SqlCount />,
    },

    {
      path: "sqlsum",
      element: <SqlSum />,
    },

    {
      path: "sqlavg",
      element: <SqlAvg />,
    },

    {
      path: "sqllike",
      element: <SqlLike />,
    },

    {
      path: "sqlwildcard",
      element: <SqlWildcards />,
    },

    {
      path: "sqlinoperator",
      element: <SqlInOperator />,
    },

    {
      path: "sqlbetween",
      element: <SqlBetween />,
    },

    {
      path: "sqlaliases",
      element: <SqlAliases />,
    },

    {
      path: "sqljoins",
      element: <SqlJoins />,
    },

    {
      path: "sqlinnerjoin",
      element: <SqlInnerJoin />,
    },

    {
      path: "sqlleftjoin",
      element: <SqlLeftJoin />,
    },

    {
      path: "sqlrightjoin",
      element: <SqlRightJoin />,
    },

    {
      path: "sqlfulljoin",
      element: <SqlFullJoin />,
    },

    {
      path: "sqlselfjoin",
      element: <SqlSelfJoin />,
    },

    {
      path: "sqlunion",
      element: <SqlUnion />,
    },

    {
      path: "sqlunionall",
      element: <SqlUnionAll />,
    },

    {
      path: "sqlgroupby",
      element: <SqlGroupBy />,
    },

    {
      path: "sqlhaving",
      element: <SqlHaving />,
    },

    {
      path: "sqlexists",
      element: <SqlExists />,
    },

    {
      path: "sqlanyall",
      element: <SqlAnyAll />,
    },

    {
      path: "sqlselectintro",
      element: <SqlSelectInto />,
    },

    {
      path: "sqlselectintroselect",
      element: <SqlInsertIntoSelect />,
    },

    {
      path: "sqlcase",
      element: <SqlCase />,
    },

    {
      path: "sqlnullfunctions",
      element: <SqlNullFunctions />,
    },

    {
      path: "sqlstoredprocedure",
      element: <SqlStoredProcedure />,
    },

    {
      path: "sqlcomments",
      element: <SqlComments />,
    },

    {
      path: "sqloperators",
      element: <SqlOperators />,
    },

    {
      path: "sqlcreatedatabase",
      element: <SqlCreateDatabase />,
    },

    {
      path: "sqldropdatabase",
      element: <SqlDropDatabase />,
    },

    {
      path: "sqlbackupdatabase",
      element: <SqlBackupDatabase />,
    },

    {
      path: "sqlcreatetable",
      element: <SqlCreateTable />,
    },

    {
      path: "sqldroptable",
      element: <SqlDropTable />,
    },

    {
      path: "sqlaltertable",
      element: <SqlAlterTable />,
    },

    {
      path: "sqlconstraints",
      element: <SqlConstraints />,
    },

    {
      path: "sqlnotnull",
      element: <SqlNotNull />,
    },

    {
      path: "sqlunique",
      element: <SqlUnique />,
    },

    {
      path: "sqlprimarykey",
      element: <SqlPrimaryKey />,
    },

    {
      path: "sqlforeignkey",
      element: <SqlForeignKey />,
    },

    {
      path: "sqlcheck",
      element: <SqlCheck />,
    },

    {
      path: "sqldefault",
      element: <SqlDefault />,
    },

    {
      path: "sqlindex",
      element: <SqlIndex />,
    },

    {
      path: "sqlautoincrement",
      element: <SqlAutoIncrement />,
    },

    {
      path: "sqldates",
      element: <SqlDates />,
    },

    {
      path: "sqlviews",
      element: <SqlViews />,
    },

    {
      path: "sqlinjection",
      element: <SqlInjection />,
    },

    {
      path: "sqlhosting",
      element: <SqlHosting />,
    },

    {
      path: "sqldatatypes",
      element: <SqlDataTypes />,
    },

    {
      path: "pythonintroduction",
      element: <PythonIntroduction />,
    },

    {
      path: "pythongettingstarted",
      element: <PythonGettingStarted />,
    },

    {
      path: "pythonSyntax",
      element: <PythonSyntax />,
    },

    {
      path: "pythoncomments",
      element: <PythonComments />,
    },

    {
      path: "pythonvariables",
      element: <PythonVariables />,
    },

    {
      path: "pythondatatypes",
      element: <PythonDataTypes />,
    },

    {
      path: "pythonnumbers",
      element: <PythonNumbers />,
    },

    {
      path: "pythoncasting",
      element: <PythonCasting />,
    },

    {
      path: "pythonstrings",
      element: <PythonStrings />,
    },

    {
      path: "pythonbooleans",
      element: <PythonBooleans />,
    },

    {
      path: "pythonoperators",
      element: <PythonOperators />,
    },

    {
      path: "pythonlist",
      element: <PythonLists />,
    },

    {
      path: "pythontuples",
      element: <PythonTuples />,
    },

    {
      path: "pythonsets",
      element: <PythonSets />,
    },

    {
      path: "pythondictionaries",
      element: <PythonDictionaries />,
    },

    {
      path: "pythonifelse",
      element: <PythonIfElse />,
    },

    {
      path: "pythonloops",
      element: <PythonLoops />,
    },

    {
      path: "pythonmatch",
      element: <PythonMatch />,
    },

    {
      path: "pythonwhileloops",
      element: <PythonWhileLoops />,
    },

    {
      path: "pythonforloops",
      element: <PythonForLoops />,
    },

    {
      path: "pythonfunctions",
      element: <PythonFunctions />,
    },

    {
      path: "pythonlambda",
      element: <PythonLambda />,
    },

    {
      path: "pythonarray",
      element: <PythonArray />,
    },

    {
      path: "pythonoop",
      element: <PythonOOP />,
    },

    {
      path: "pythonclassesobjects",
      element: <PythonClassesObjects />,
    },

    {
      path: "pythoninheritance",
      element: <PythonInheritance />,
    },

    {
      path: "pythoniterators",
      element: <PythonIterators />,
    },

    {
      path: "pythonpolymorphism",
      element: <PythonPolymorphism />,
    },

    {
      path: "pythonscope",
      element: <PythonScope />,
    },

    {
      path: "pythonmodules",
      element: <PythonModules />,
    },

    {
      path: "pythondates",
      element: <PythonDates />,
    },

    {
      path: "pythonmath",
      element: <PythonMath />,
    },

    {
      path: "pythonjson",
      element: <PythonJSON />,
    },

    {
      path: "pythonregex",
      element: <PythonRegex />,
    },

    {
      path: "pytonpip",
      element: <PythonPip />,
    },

    {
      path: "pythontryexcept",
      element: <PythonTryExcept />,
    },

    {
      path: "pythonstringformatting",
      element: <PythonStringFormatting />,
    },

    {
      path: "pythonuserinput",
      element: <PythonUserInput />,
    },

    {
      path: "pythonvirtualenv",
      element: <PythonVirtualEnv />,
    },

    {
      path: "pythonfilehandling",
      element: <PythonFileHandling />,
    },

    {
      path: "pythonreadfile",
      element: <PythonReadFile />,
    },

    {
      path: "pythonwritefile",
      element: <PythonWriteFile />,
    },

    {
      path: "pythondeletefile",
      element: <PythonDeleteFile />,
    },

    {
      path: "pythonnumpy",
      element: <PythonNumpy />,
    },

    {
      path: "pythonpandas",
      element: <PythonPandas />,
    },

    {
      path: "pythonscipy",
      element: <PythonScipy />,
    },

    {
      path: "pythondjango",
      element: <PythonDjango />,
    },

    {
      path: "react",
      element: <React />,
    },

    {
      path: "reactintroduction",
      element: <ReactIntroduction />,
    },

    {
      path: "reactgetstarted",
      element: <ReactGetStarted />,
    },

    {
      path: "reactfirstapp",
      element: <ReactFirstApp />,
    },

    {
      path: "reactrenderhtml",
      element: <ReactRenderHtml />,
    },

    {
      path: "reactupgrade",
      element: <ReactUpgrade />,
    },

    {
      path: "reactes6",
      element: <ReactES6 />,
    },

    {
      path: "reactjsx",
      element: <ReactJSX />,
    },

    {
      path: "reactjsxexpressions",
      element: <ReactJSXExpressions />,
    },

    {
      path: "reactjsxattributes",
      element: <ReactJSXAttributes />,
    },

    {
      path: "reactjsxifstatment",
      element: <ReactJSXIfStatement />,
    },

    {
      path: "reactcomponents",
      element: <ReactComponents />,
    },
    {
      path: "reactclass",
      element: <ReactClass />,
    },

    {
      path: "reactprops",
      element: <ReactProps />,
    },

    {
      path: "reactpropsdestructuring",
      element: <ReactPropsDestructuring />,
    },

    {
      path: "reactpropschildren",
      element: <ReactPropsChildren />,
    },

    {
      path: "reactevents",
      element: <ReactEvents />,
    },

    {
      path: "reactconditional",
      element: <ReactConditional />,
    },

    {
      path: "reactlist",
      element: <ReactLists />,
    },

    {
      path: "reactforms",
      element: <ReactForms />,
    },

    {
      path: "reactformsubmit",
      element: <ReactFormSubmit />,
    },

    {
      path: "reacttextarea",
      element: <ReactTextarea />,
    },

    {
      path: "reactselect",
      element: <ReactSelect />,
    },

    {
      path: "reactmultipleinput",
      element: <ReactMultipleInput />,
    },

    {
      path: "reactcheckbox",
      element: <ReactCheckbox />,
    },

    {
      path: "reactradio",
      element: <ReactRadio />,
    },

    {
      path: "reactportal",
      element: <ReactPortal />,
    },

    {
      path: "reactsuspense",
      element: <ReactSuspense />,
    },

    {
      path: "reactcssstyle",
      element: <ReactCssStyle />,
    },

    {
      path: "reactcssmodules",
      element: <ReactCssModules />,
    },

    {
      path: "reactcssinjs",
      element: <ReactCssInJs />,
    },

    {
      path: "reactrouter",
      element: <ReactRouter />,
    },

    {
      path: "reacttransitions",
      element: <ReactTransitions />,
    },

    {
      path: "reactforwardref",
      element: <ReactForwardRef />,
    },

    {
      path: "reacthoc",
      element: <ReactHOC />,
    },

    {
      path: "reactsass",
      element: <ReactSass />,
    },

    {
      path: "reacthooks",
      element: <ReactHooks />,
    },

    {
      path: "reactusestate",
      element: <ReactUseState />,
    },

    {
      path: "reactuseeffect",
      element: <ReactUseEffect />,
    },

    {
      path: "reactusecontext",
      element: <ReactUseContext />,
    },

    {
      path: "reactuseref",
      element: <ReactUseRef />,
    },

    {
      path: "reactusereducer",
      element: <ReactUseReducer />,
    },

    {
      path: "reactusecallback",
      element: <ReactUseCallback />,
    },

    {
      path: "reactusememo",
      element: <ReactUseMemo />,
    },

    {
      path: "reactcustomhooks",
      element: <ReactCustomHooks />,
    },

    {
      path: "jquery",
      element: <JQuery />,
    },

    {
      path: "jqueryintroduction",
      element: <JqueryIntroduction />,
    },

    {
      path: "jquerygetstarted",
      element: <JqueryGetStarted />,
    },

    {
      path: "jquerysyntax",
      element: <JquerySyntax />,
    },

    {
      path: "jqueryselectors",
      element: <JquerySelectors />,
    },

    {
      path: "jqueryevents",
      element: <JqueryEvents />,
    },

    {
      path: "jqueryhideshow",
      element: <JqueryHideShow />,
    },

    {
      path: "jqueryfade",
      element: <JqueryFade />,
    },

    {
      path: "jqueryslide",
      element: <JquerySlide />,
    },

    {
      path: "jqueryanimation",
      element: <JqueryAnimation />,
    },

    {
      path: "jquerystop",
      element: <JqueryStop />,
    },

    {
      path: "jquerycallback",
      element: <JqueryCallback />,
    },

    {
      path: "jquerychaining",
      element: <JqueryChaining />,
    },

    {
      path: "jqueryget",
      element: <JqueryGet />,
    },

    {
      path: "jqueryset",
      element: <JquerySet />,
    },

    {
      path: "jqueryadd",
      element: <JqueryAdd />,
    },

    {
      path: "jqueryremove",
      element: <JqueryRemove />,
    },

    {
      path: "jquerycssclasses",
      element: <JqueryCssClasses />,
    },

    {
      path: "jquerycss",
      element: <JqueryCss />,
    },

    {
      path: "jquerydimensions",
      element: <JqueryDimensions />,
    },

    {
      path: "jquerytraversing",
      element: <JqueryTraversing />,
    },

    {
      path: "jqueryancestors",
      element: <JqueryAncestors />,
    },

    {
      path: "jquerydescendant",
      element: <JqueryDescendant />,
    },

    {
      path: "jquerysiblings",
      element: <JquerySiblings />,
    },

    {
      path: "jqueryfiltering",
      element: <JqueryFiltering />,
    },

    {
      path: "jqueryajaxintro",
      element: <JqueryAjaxIntro />,
    },

    {
      path: "jqueryload",
      element: <JqueryLoad />,
    },

    {
      path: "jquerygetpost",
      element: <JqueryGetPost />,
    },

    {
      path: "jquerynoconflict",
      element: <JqueryNoConflict />,
    },

    {
      path: "jqueryfilters",
      element: <JqueryFilters />,
    },

   
 {
  path:"excel",
  element:<Excel />
 },

    
 {
  path:"excelintroduction",
  element:<ExcelIntroduction />
 },

  {
  path:"excelgetstarted",
  element:<ExcelGetStarted />
 },

   {
  path:"exceloverview",
  element:<ExcelOverview />
 },

 
   {
  path:"excelsyntax",
  element:<ExcelSyntax />
 },

  
   {
  path:"excelranges",
  element:<ExcelRanges />
 },

    {
  path:"excelfill",
  element:<ExcelFill />
 },

   {
  path:"excelmovecell",
  element:<ExcelMoveCell />
 },

 
   {
  path:"exceladdcells",
  element:<ExcelAddCells />
 },

    {
  path:"exceldeletecells",
  element:<ExcelDeleteCells />
 },


     {
  path:"excelundoredo",
  element:<ExcelUndoRedo />
 },

    {
  path:"excelformulas",
  element:<ExcelFormulas />
 },

    {
  path:"excelrelativereference",
  element:<ExcelRelativeReference />
 },

     {
  path:"excelabsolutereference",
  element:<ExcelAbsoluteReference />
 },

      {
  path:"excelarithmeticoperators",
  element:<ExcelArithmeticOperators />
 },

       {
  path:"excelparentheses",
  element:<ExcelParentheses />
 },


        {
  path:"excelfunctions",
  element:<ExcelFunctions />
 },

         {
  path:"excelformatting",
  element:<ExcelFormatting />
 },


 
         {
  path:"excelformatpainter",
  element:<ExcelFormatPainter />
 },


          {
  path:"excelformatcolors",
  element:<ExcelFormatColors />
 },

           {
  path:"excelformatfonts",
  element:<ExcelFormatFonts />
 },

          {
  path:"excelformatborders",
  element:<ExcelFormatBorders />
 },


 
          {
  path:"excelformatnumbers",
  element:<ExcelFormatNumbers />
 },

           {
  path:"excelformatgrids",
  element:<ExcelFormatGrids />
 },

            {
  path:"excelformatsettings",
  element:<ExcelFormatSettings />
 },

 
            {
  path:"excelsort",
  element:<ExcelSort />
 },


   {
  path:"excelfilter",
  element:<ExcelFilter />
 },

    {
  path:"exceltables",
  element:<ExcelTables />
 },

     {
  path:"excelconditionalformat",
  element:<ExcelConditionalFormat />
 },

      {
  path:"excelhighlightcellrules",
  element:<ExcelHighlightCellRules />
 },


      {
  path:"exceltopbottomrules",
  element:<ExcelTopBottomRules />
 },


       {
  path:"exceldatabars",
  element:<ExcelDataBars />
 },


 
       {
  path:"excelcolorscales",
  element:<ExcelColorScales />
 },


 
       {
  path:"exceliconsets",
  element:<ExcelIconSets />
 },

        {
  path:"excelmanagerules",
  element:<ExcelManageRules />
 },

       {
  path:"excelcharts",
  element:<ExcelCharts />
 },

      {
  path:"tablepivotintro",
  element:<ExcelTablePivotIntro />
 },


       {
  path:"casepokemart",
  element:<ExcelCasePokeMart />
 },


 
       {
  path:"casepokemartstyling",
  element:<ExcelCasePokeMartStyling />
 },

       {
  path:"exceland",
  element:<ExcelAnd />
 },


        {
  path:"excelaverage",
  element:<ExcelAverage />
 },

         {
  path:"excelaverageif",
  element:<ExcelAverageIf />
 },

 
         {
  path:"excelaverageifs",
  element:<ExcelAverageIfs />
 },

        {
  path:"excelconcat",
  element:<ExcelConcat />
 },

         {
  path:"excelcount",
  element:<ExcelCount />
 },


          {
  path:"excelcounta",
  element:<ExcelCountA />
 },

           {
  path:"excelcountblank",
  element:<ExcelCountBlank />
 },


            {
  path:"excelcountif",
  element:<ExcelCountIF />
 },


             {
  path:"excelcountifs",
  element:<ExcelCountIFS />
 },

              {
  path:"excelif",
  element:<ExcelIF />
 },


 
              {
  path:"excelifs",
  element:<ExcelIFS />
 },


               {
  path:"excelleft",
  element:<ExcelLEFT />
 },

                {
  path:"excellower",
  element:<ExcelLOWER />
 },

                 {
  path:"excelmax",
  element:<ExcelMAX />
 },

                  {
  path:"excelmedian",
  element:<ExcelMEDIAN />
 },

                   {
  path:"excelmin",
  element:<ExcelMIN />
 },

                    {
  path:"excelmode",
  element:<ExcelMODE />
 },

                     {
  path:"excelnpv",
  element:<ExcelNPV />
 },

                      {
  path:"excelor",
  element:<ExcelOR />
 },

                       {
  path:"excelrand",
  element:<ExcelRAND />
 },

                       {
  path:"excelright",
  element:<ExcelRIGHT />
 },

                        {
  path:"excelstdevp",
  element:<ExcelSTDEVP />
 },

                         {
  path:"excelstdevs",
  element:<ExcelSTDEVS />
 },
























  ]);

  return <RouterProvider router={router} />;
};

export default App;
