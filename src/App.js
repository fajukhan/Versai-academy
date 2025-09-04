
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Html from './components/HTMLPAGES/Html';
import Htmlhome from './components/HTMLPAGES/Htmlhome';
import Editor from './components/HTMLPAGES/Editor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Basic from './components/HTMLPAGES/Basic';
import Elements from './components/HTMLPAGES/Elements';
import Attribute from './components/HTMLPAGES/Attribute';
import Heading from './components/HTMLPAGES/Heading';
import Css from './components/Css';
import Javascript from './components/Javascript';
import Sql from './components/SQL PAGES/Sql';
import Python from './components/PYTHON PAGES/Python.js';
import Java from './components/Java';
import Php from './components/Php';

import JQuery from './components/JQuery';
import Excel from './components/Excel';
import Git from './components/Git';
import Wordpress from './components/Wordpress';
import DigitalMarketing from './components/DigitalMarketing';
import Paragraph from './components/HTMLPAGES/Paragraph';
import Style from './components/HTMLPAGES/Style';
import Formatting from './components/HTMLPAGES/Formatting';
import Quotation from './components/HTMLPAGES/Quotation';
import Comments from './components/HTMLPAGES/Comments';
import Colors from './components/HTMLPAGES/Colors';
import CSS2 from './components/HTMLPAGES/CSS2';
import Links1 from './components/HTMLPAGES/Links1';
import Images1 from './components/HTMLPAGES/Images1';
import Favicon from './components/HTMLPAGES/Favicon';
import Pagetitle from './components/HTMLPAGES/Pagetitle';
import Tables from './components/HTMLPAGES/Tables';
import Lists from './components/HTMLPAGES/Lists';
import Div from './components/HTMLPAGES/Div';
import BlockInline from './components/HTMLPAGES/BlockInline';
import HTMLClass from './components/HTMLPAGES/HTMLClass';
import HTMLId from './components/HTMLPAGES/HTMLId';
import HTMLIframes from './components/HTMLPAGES/HTMLIframes';
import HTMLJavascript from './components/HTMLPAGES/HTMLJavascript';
import HTMLFilePaths from './components/HTMLPAGES/HTMLFilePaths';
import HTMLHead from './components/HTMLPAGES/HTMLHead';
import HtmlLayout from './components/HTMLPAGES/HtmlLayout';
import HtmlResponsive from './components/HTMLPAGES/HtmlResponsive';
import HtmlSemantics from './components/HTMLPAGES/HtmlSemantics';
import HtmlForms from './components/HTMLPAGES/HtmlForms';
import HtmlFormElements from './components/HTMLPAGES/HtmlFormElements';
import HtmlInputTypes from './components/HTMLPAGES/HtmlInputTypes';
import HtmlInputAttributes from './components/HTMLPAGES/HtmlInputAttributes';
import HtmlFormAttributes from './components/HTMLPAGES/HtmlFormAttributes';
import HtmlMultimedia from './components/HTMLPAGES/HtmlMultimedia';
import HtmlAudio from './components/HTMLPAGES/HtmlAudio';
import HtmlVideo from './components/HTMLPAGES/HtmlVideo';
import HtmlYouTube from './components/HTMLPAGES/HtmlYouTube';
import SqlIntroduction from './components/SQL PAGES/SqlIntroduction';
import SqlSyntax from './components/SQL PAGES/SqlSyntax ';
import SqlSelect from './components/SQL PAGES/SqlSelect';
import SqlSelectDistinct from './components/SQL PAGES/SqlSelectDistinct ';
import SqlWhere from './components/SQL PAGES/SqlWhere ';
import SqlOrderBy from './components/SQL PAGES/SqlOrderBy ';
import SqlAnd from './components/SQL PAGES/SqlAnd ';
import SqlOr from './components/SQL PAGES/SqlOr ';
import SqlNot from './components/SQL PAGES/SqlNot ';
import SqlInsert from './components/SQL PAGES/SqlInsert';
import SqlNullValues from './components/SQL PAGES/SqlNullValues ';
import SqlUpdate from './components/SQL PAGES/SqlUpdate ';
import SqlDelete from './components/SQL PAGES/SqlDelete ';
import SqlTop from './components/SQL PAGES/SqlTop ';
import SqlAggregateFunctions from './components/SQL PAGES/SqlAggregateFunctions ';
import SqlMinMax from './components/SQL PAGES/SqlMinMax ';
import SqlCount from './components/SQL PAGES/SqlCount ';
import SqlSum from './components/SQL PAGES/SqlSum ';
import SqlAvg from './components/SQL PAGES/SqlAvg ';
import SqlLike from './components/SQL PAGES/SqlLike ';
import SqlWildcards from './components/SQL PAGES/SqlWildcards ';
import SqlInOperator from './components/SQL PAGES/SqlInOperator ';
import SqlBetween from './components/SQL PAGES/SqlBetween ';
import SqlAliases from './components/SQL PAGES/SqlAliases ';
import SqlJoins from './components/SQL PAGES/SqlJoins ';
import SqlInnerJoin from './components/SQL PAGES/SqlInnerJoin ';
import SqlLeftJoin from './components/SQL PAGES/SqlLeftJoin ';
import SqlRightJoin from './components/SQL PAGES/SqlRightJoin';
import SqlFullJoin from './components/SQL PAGES/SqlFullJoin ';
import SqlSelfJoin from './components/SQL PAGES/SqlSelfJoin ';
import SqlUnion from './components/SQL PAGES/SqlUnion ';
import SqlUnionAll from './components/SQL PAGES/SqlUnionAll ';
import SqlGroupBy from './components/SQL PAGES/SqlGroupBy ';
import SqlHaving from './components/SQL PAGES/SqlHaving ';
import SqlExists from './components/SQL PAGES/SqlExists ';
import SqlAnyAll from './components/SQL PAGES/SqlAnyAll ';
import SqlSelectInto from './components/SQL PAGES/SqlSelectInto ';
import SqlInsertIntoSelect from './components/SQL PAGES/SqlInsertIntoSelect.js';
import SqlCase from './components/SQL PAGES/SqlCase.js';
import SqlNullFunctions from './components/SQL PAGES/SqlNullFunctions .js';
import SqlStoredProcedure from './components/SQL PAGES/SqlStoredProcedure .js';
import SqlComments from './components/SQL PAGES/SqlComments .js';
import SqlOperators from './components/SQL PAGES/SqlOperators.js';
import SqlCreateDatabase from './components/SQL PAGES/SqlCreateDatabase .js';
import SqlDropDatabase from './components/SQL PAGES/SqlDropDatabase .js';
import SqlBackupDatabase from './components/SQL PAGES/SqlBackupDatabase .js';
import SqlCreateTable from './components/SQL PAGES/SqlCreateTable .js'
import SqlAlterTable from './components/SQL PAGES/SqlAlterTable .js';
import SqlDropTable from './components/SQL PAGES/SqlDropTable .js';
import SqlConstraints from './components/SQL PAGES/SqlConstraints .js';
import SqlNotNull from './components/SQL PAGES/SqlNotNull.js';
import SqlUnique from './components/SQL PAGES/SqlUnique .js';
import SqlPrimaryKey from './components/SQL PAGES/SqlPrimaryKey .js';
import SqlForeignKey from './components/SQL PAGES/SqlForeignKey .js';
import SqlCheck from './components/SQL PAGES/SqlCheck .js';
import SqlDefault from './components/SQL PAGES/SqlDefault .js';
import SqlIndex from './components/SQL PAGES/SqlIndex .js';
import SqlAutoIncrement from './components/SQL PAGES/SqlAutoIncrement.js';
import SqlDates from './components/SQL PAGES/SqlDates .js';
import SqlViews from './components/SQL PAGES/SqlViews .js';
import SqlInjection from './components/SQL PAGES/SqlInjection .js';
import SqlHosting from './components/SQL PAGES/SqlHosting .js';
import SqlDataTypes from './components/SQL PAGES/SqlDataTypes .js';
import PythonIntroduction from './components/PYTHON PAGES/PythonIntroduction .js';
import PythonGettingStarted from './components/PYTHON PAGES/PythonGettingStarted .js';
import PythonSyntax from './components/PYTHON PAGES/PythonSyntax .js';
import PythonComments from './components/PYTHON PAGES/PythonComments .js';
import PythonVariables from './components/PYTHON PAGES/PythonVariables .js';
import PythonDataTypes from './components/PYTHON PAGES/PythonDataTypes .js';
import PythonNumbers from './components/PYTHON PAGES/PythonNumbers .js';
import PythonCasting from './components/PYTHON PAGES/PythonCasting .js';
import PythonStrings from './components/PYTHON PAGES/PythonStrings .js';
import PythonBooleans from './components/PYTHON PAGES/PythonBooleans .js';
import PythonOperators from './components/PYTHON PAGES/PythonOperators .js';
import PythonLists from './components/PYTHON PAGES/PythonLists .js';
import PythonTuples from './components/PYTHON PAGES/PythonTuples .js';
import PythonSets from './components/PYTHON PAGES/PythonSets .js';
import PythonDictionaries from './components/PYTHON PAGES/PythonDictionaries .js';
import PythonIfElse from './components/PYTHON PAGES/PythonIfElse .js';
import PythonLoops from './components/PYTHON PAGES/PythonLoops .js';
import PythonMatch from './components/PYTHON PAGES/PythonMatch .js';
import PythonWhileLoops from './components/PYTHON PAGES/PythonWhileLoops .js';
import PythonForLoops from './components/PYTHON PAGES/PythonForLoops .js';
import PythonFunctions from './components/PYTHON PAGES/PythonFunctions .js';
import PythonLambda from './components/PYTHON PAGES/PythonLambda .js';
import PythonArray from './components/PYTHON PAGES/PythonArray .js';
import PythonOOP from './components/PYTHON PAGES/PythonOOP .js';
import PythonClassesObjects from './components/PYTHON PAGES/PythonClassesObjects .js';
import PythonInheritance from './components/PYTHON PAGES/PythonInheritance .js';
import PythonIterators from './components/PYTHON PAGES/PythonIterators .js';
import PythonPolymorphism from './components/PYTHON PAGES/PythonPolymorphism .js';
import PythonScope from './components/PYTHON PAGES/PythonScope .js';
import PythonModules from './components/PYTHON PAGES/PythonModules .js';
import PythonDates from './components/PYTHON PAGES/PythonDates .js';
import PythonMath from './components/PYTHON PAGES/PythonMath .js';
import PythonJSON from './components/PYTHON PAGES/PythonJSON .js';
import PythonRegex from './components/PYTHON PAGES/PythonRegex .js';
import PythonPip from './components/PYTHON PAGES/PythonPip .js';
import PythonTryExcept from './components/PYTHON PAGES/PythonTryExcept .js';
import PythonStringFormatting from './components/PYTHON PAGES/PythonStringFormatting .js';
import PythonUserInput from './components/PYTHON PAGES/PythonUserInput .js';
import PythonVirtualEnv from './components/PYTHON PAGES/PythonVirtualEnv .js';
import PythonFileHandling from './components/PYTHON PAGES/PythonFileHandling .js';
import PythonReadFile from './components/PYTHON PAGES/PythonReadFile .js';
import PythonWriteFile from './components/PYTHON PAGES/PythonWriteFile .js';
import PythonDeleteFile from './components/PYTHON PAGES/PythonDeleteFile .js';
import PythonNumpy from './components/PYTHON PAGES/PythonNumpy .js';
import PythonPandas from './components/PYTHON PAGES/PythonPandas .js';
import PythonScipy from './components/PYTHON PAGES/PythonScipy .js';
import PythonDjango from './components/PYTHON PAGES/PythonDjango .js';
import React from './components/REACT PAGES/React.js';
import ReactIntroduction from './components/REACT PAGES/ReactIntroduction .js';
import ReactGetStarted from './components/REACT PAGES/ReactGetStarted .js';
import ReactFirstApp from './components/REACT PAGES/ReactFirstApp .js';
import ReactRenderHtml from './components/REACT PAGES/ReactRenderHtml .js';
import ReactUpgrade from './components/REACT PAGES/ReactUpgrade .js';
import ReactES6 from './components/REACT PAGES/ReactES6 .js';
import ReactJSX from './components/REACT PAGES/ReactJSX .js';
import ReactJSXExpressions from './components/REACT PAGES/ReactJSXExpressions .js';
import ReactJSXAttributes from './components/REACT PAGES/ReactJSXAttributes .js';
import ReactJSXIfStatement from './components/REACT PAGES/ReactJSXIfStatement .js';
import ReactComponents from './components/REACT PAGES/ReactComponents .js';
import ReactClass from './components/REACT PAGES/ReactClass .js';
import ReactProps from './components/REACT PAGES/ReactProps .js';
import ReactPropsDestructuring from './components/REACT PAGES/ReactPropsDestructuring .js';
import ReactPropsChildren from './components/REACT PAGES/ReactPropsChildren .js';
import ReactEvents from './components/REACT PAGES/ReactEvents .js';
import ReactConditional from './components/REACT PAGES/ReactConditional .js';
import ReactLists from './components/REACT PAGES/ReactLists .js';
import ReactForms from './components/REACT PAGES/ReactForms .js';






const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },

      {
      path: "navbar",
      element: <Navbar/>
    },


     {
      path: "footer",
      element: <Footer/>
    },

      {
      path: "navbar",
      element: <Navbar/>
    },


     {
      path: "footer",
      element: <Footer/>
    },

     {
      path: "/html",
      element: <Html/>
    },


     {
      path: "css",
      element: <Css />
    },
      {
      path: "javascript",
      element: <Javascript />
    },
    {
      path: "sql",
      element: <Sql />
    },
    {
      path: "PythonTutorial",
      element: <Python />
    },
    {
      path: "java",
      element: <Java />
    },
    {
      path: "php",
      element: <Php />
    },
   
    {
      path: "jquery",
      element: <JQuery />
    },
    {
      path: "excel",
      element: <Excel />
    },
    {
      path: "git",
      element: <Git />
    },

    {
      path: "wordpress",
      element: <Wordpress />
    },
    {
      path: "digitalmarketing",
      element: <DigitalMarketing />
    },
    {
      path: "/htmlhome",
      element: <Htmlhome/>
    },


       {
      path: "editor",
      element: <Editor/>
    },

      {
      path: "basic",
      element: <Basic />
    },


       {
      path: "elements",
      element: <Elements />
    },

    
       {
      path: "attribute",
      element: <Attribute />
    },
   

    
       {
      path: "heading",
      element: <Heading />
    },
   

      
       {
      path: "paragraph",
      element: <Paragraph />
    },


       
       {
      path: "style",
      element: <Style />
    },
   


         {
      path: "formatting",
      element: <Formatting />
    },


        {
      path: "quotation",
      element: <Quotation />
    },


       {
      path: "comments",
      element: <Comments />
    },


        {
      path: "colors",
      element: <Colors />
    },


       {
      path: "css2",
      element: <CSS2 />
    },


      {
      path: "links",
      element: <Links1 />
    },


      {
      path: "images",
      element: <Images1 />
    },



       {
      path: "favicon",
      element: <Favicon />
    },


         {
      path: "pagetitle",
      element: <Pagetitle />
    },


          {
      path: "tables",
      element: <Tables />
    },

    
          {
      path: "lists",
      element: <Lists />
    },


     
          {
      path: "divs",
      element: <Div />
    },


           {
      path: "blockinline",
      element: <BlockInline />
    },


    

           {
      path: "htmlclass",
      element: <HTMLClass />
    },



              {
      path: "htmlid",
      element: <HTMLId />
    },


             {
      path: "htmliframes",
      element: <HTMLIframes />
    },


           {
      path: "htmljavascript",
      element: <HTMLJavascript />
    },


    

           {
      path: "htmlfilepath",
      element: <HTMLFilePaths />
    },


          {
      path: "htmlhead",
      element: <HTMLHead />
    },

         {
      path: "htmllayout",
      element: <HtmlLayout />
    },

    
         {
      path: "htmlresponsive",
      element: <HtmlResponsive />
    },

          {
      path: "htmlsemantic",
      element: <HtmlSemantics />
    },

           {
      path: "htmlform",
      element: <HtmlForms />
    },


    
           {
      path: "htmlformelement",
      element: <HtmlFormElements />
    },


           {
      path: "htmlinput",
      element: <HtmlInputTypes />
    },


            {
      path: "htmlattribute",
      element: <HtmlInputAttributes />
    },


                {
      path: "htmlformattribute",
      element: <HtmlFormAttributes />
    },


                {
      path: "htmlmultimedia",
      element: <HtmlMultimedia />
    },


              {
      path: "htmlaudio",
      element: <HtmlAudio />
    },


    
              {
      path: "htmlvideo",
      element: <HtmlVideo />
    },


      
              {
      path: "htmlyoutube",
      element: <HtmlYouTube />
    },



             {
      path: "sqlintroduction",
      element: <SqlIntroduction />
    },

           {
      path: "sqlsyntax",
      element: <SqlSyntax />
    },

            {
      path: "sqlselect",
      element: <SqlSelect />
    },


            {
      path: "sqlselectdistinct",
      element: <SqlSelectDistinct />
    },



          {
      path: "sqlwhere",
      element: <SqlWhere />
    },


    
          {
      path: "sqlorderby",
      element: <SqlOrderBy />
    },

           {
      path: "sqland",
      element: <SqlAnd />
    },


    
           {
      path: "sqlor",
      element: <SqlOr />
    },


       {
      path: "sqlnot",
      element: <SqlNot />
    },


    
       {
      path: "sqlinsert",
      element: <SqlInsert />
    },

     {
      path: "sqlnullvalues",
      element: <SqlNullValues />
    },


    
     {
      path: "sqlupdate",
      element: <SqlUpdate />
    },


     {
      path: "sqldelete",
      element: <SqlDelete />
    },

    
     {
      path: "sqltop",
      element: <SqlTop />
    },


      {
      path: "sqlaggregatefunction",
      element: <SqlAggregateFunctions />
    },

     {
      path: "sqlminmax",
      element: <SqlMinMax />
    },

     {
      path: "sqlcount",
      element: <SqlCount />
    },


      {
      path: "sqlsum",
      element: <SqlSum />
    },

     {
      path: "sqlavg",
      element: <SqlAvg />
    },

     {
      path: "sqllike",
      element: <SqlLike />
    },

      {
      path: "sqlwildcard",
      element: <SqlWildcards />
    },

    
      {
      path: "sqlinoperator",
      element: <SqlInOperator />
    },


     
      {
      path: "sqlbetween",
      element: <SqlBetween />
    },


       {
      path: "sqlaliases",
      element: <SqlAliases />
    },

     {
      path: "sqljoins",
      element: <SqlJoins />
    },


      {
      path: "sqlinnerjoin",
      element: <SqlInnerJoin />
    },

          {
      path: "sqlleftjoin",
      element: <SqlLeftJoin />
    },


          {
      path: "sqlrightjoin",
      element: <SqlRightJoin />
    },


            {
      path: "sqlfulljoin",
      element: <SqlFullJoin />
    },

                {
      path: "sqlselfjoin",
      element: <SqlSelfJoin />
    },


                 {
      path: "sqlunion",
      element: <SqlUnion />
    },

    
                 {
      path: "sqlunionall",
      element: <SqlUnionAll />
    },

      
                 {
      path: "sqlgroupby",
      element: <SqlGroupBy />
    },

                 {
      path: "sqlhaving",
      element: <SqlHaving />
    },

                   {
      path: "sqlexists",
      element: <SqlExists />
    },

                  {
      path: "sqlanyall",
      element: <SqlAnyAll />
    },

                  {
      path: "sqlselectintro",
      element: <SqlSelectInto />
    },


                 {
      path: "sqlselectintroselect",
      element: <SqlInsertIntoSelect />
    },


            {
      path: "sqlcase",
      element: <SqlCase />
    },

                {
      path: "sqlnullfunctions",
      element: <SqlNullFunctions />
    },

                  {
      path: "sqlstoredprocedure",
      element: <SqlStoredProcedure />
    },

                {
      path: "sqlcomments",
      element: <SqlComments />
    },

                    {
      path: "sqloperators",
      element: <SqlOperators />
    },

      {
      path: "sqlcreatedatabase",
      element: <SqlCreateDatabase />
    },

    
      {
      path: "sqldropdatabase",
      element: <SqlDropDatabase />
    },


          {
      path: "sqlbackupdatabase",
      element: <SqlBackupDatabase />
    },


         {
      path: "sqlcreatetable",
      element: <SqlCreateTable />
    },

        {
      path: "sqldroptable",
      element: <SqlDropTable />
    },


    
         {
      path: "sqlaltertable",
      element: <SqlAlterTable />
    },


      
         {
      path: "sqlconstraints",
      element: <SqlConstraints />
    },


        {
      path: "sqlnotnull",
      element: <SqlNotNull />
    },


    
        {
      path: "sqlunique",
      element: <SqlUnique />
    },


           {
      path: "sqlprimarykey",
      element: <SqlPrimaryKey />
    },


          {
      path: "sqlforeignkey",
      element: <SqlForeignKey />
    },

    
          {
      path: "sqlcheck",
      element: <SqlCheck />
    },

              {
      path: "sqldefault",
      element: <SqlDefault />
    },

              {
      path: "sqlindex",
      element: <SqlIndex />
    },

    
              {
      path: "sqlautoincrement",
      element: <SqlAutoIncrement />
    },

          {
      path: "sqldates",
      element: <SqlDates />
    },

       {
      path: "sqlviews",
      element: <SqlViews />
    },
    
       {
      path: "sqlinjection",
      element: <SqlInjection />
    },

        {
      path: "sqlhosting",
      element: <SqlHosting />
    },

          {
      path: "sqldatatypes",
      element: <SqlDataTypes />
    },

    
          {
      path: "pythonintroduction",
      element: <PythonIntroduction />
    },

      
          {
      path: "pythongettingstarted",
      element: <PythonGettingStarted />
    },

       
          {
      path: "pythonSyntax",
      element: <PythonSyntax />
    },

     
          {
      path: "pythoncomments",
      element: <PythonComments />
    },

         {
      path: "pythonvariables",
      element: <PythonVariables />
    },

           {
      path: "pythondatatypes",
      element: <PythonDataTypes />
    },

    
           {
      path: "pythonnumbers",
      element: <PythonNumbers />
    },

     
           {
      path: "pythoncasting",
      element: <PythonCasting />
    },

     
           {
      path: "pythonstrings",
      element: <PythonStrings />
    },

        
           {
      path: "pythonbooleans",
      element: <PythonBooleans />
    },


            {
      path: "pythonoperators",
      element: <PythonOperators />
    },

    
            {
      path: "pythonlist",
      element: <PythonLists />
    },

        
            {
      path: "pythontuples",
      element: <PythonTuples />
    },

          
            {
      path: "pythonsets",
      element: <PythonSets />
    },

                {
      path: "pythondictionaries",
      element: <PythonDictionaries />
    },


               {
      path: "pythonifelse",
      element: <PythonIfElse />
    },


    
               {
      path: "pythonloops",
      element: <PythonLoops />
    },

                {
      path: "pythonmatch",
      element: <PythonMatch />
    },

              {
      path: "pythonwhileloops",
      element: <PythonWhileLoops />
    },

             {
      path: "pythonforloops",
      element: <PythonForLoops />
    },

               {
      path: "pythonfunctions",
      element: <PythonFunctions />
    },

    
               {
      path: "pythonlambda",
      element: <PythonLambda />
    },

               {
      path: "pythonarray",
      element: <PythonArray />
    },

                 {
      path: "pythonoop",
      element: <PythonOOP />
    },


                    {
      path: "pythonclassesobjects",
      element: <PythonClassesObjects />
    },

    
                    {
      path: "pythoninheritance",
      element: <PythonInheritance />
    },


                        {
      path: "pythoniterators",
      element: <PythonIterators />
    },

                        {
      path: "pythonpolymorphism",
      element: <PythonPolymorphism />
    },

                         {
      path: "pythonscope",
      element: <PythonScope />
    },

                         {
      path: "pythonmodules",
      element: <PythonModules />
    },

                           {
      path: "pythondates",
      element: <PythonDates />
    },

                           {
      path: "pythonmath",
      element: <PythonMath />
    },

                             {
      path: "pythonjson",
      element: <PythonJSON />
    },


    
                             {
      path: "pythonregex",
      element: <PythonRegex />
    },

                             {
      path: "pytonpip",
      element: <PythonPip />
    },

    
                             {
      path: "pythontryexcept",
      element: <PythonTryExcept />
    },


                                 {
      path: "pythonstringformatting",
      element: <PythonStringFormatting />
    },

                                     {
      path: "pythonuserinput",
      element: <PythonUserInput />
    },


                                         {
      path: "pythonvirtualenv",
      element: <PythonVirtualEnv />
    },

                                          {
      path: "pythonfilehandling",
      element: <PythonFileHandling />
    },

                                             {
      path: "pythonreadfile",
      element: <PythonReadFile />
    },

                                                 {
      path: "pythonwritefile",
      element: <PythonWriteFile />
    },

                                                    {
      path: "pythondeletefile",
      element: <PythonDeleteFile />
    },
    
                                                        {
      path: "pythonnumpy",
      element: <PythonNumpy />
    },


                                                            {
      path: "pythonpandas",
      element: <PythonPandas />
    },

                                                             {
      path: "pythonscipy",
      element: <PythonScipy />
    },
    

                                                             {
      path: "pythondjango",
      element: <PythonDjango />
    },
   
    {
      path:"react",
      element:<React />
    },
    

    {
      path:"reactintroduction",
      element:<ReactIntroduction />
    },

     {
      path:"reactgetstarted",
      element:<ReactGetStarted />
    },

      {
      path:"reactfirstapp",
      element:<ReactFirstApp />
    },

        {
      path:"reactrenderhtml",
      element:<ReactRenderHtml />
    },
    
        {
      path:"reactupgrade",
      element:<ReactUpgrade />
    },

      
        {
      path:"reactes6",
      element:<ReactES6 />
    },

         {
      path:"reactjsx",
      element:<ReactJSX />
    },

    
         {
      path:"reactjsxexpressions",
      element:<ReactJSXExpressions />
    },

        {
      path:"reactjsxattributes",
      element:<ReactJSXAttributes />
    },

         {
      path:"reactjsxifstatment",
      element:<ReactJSXIfStatement />
    },

             {
      path:"reactcomponents",
      element:<ReactComponents />
    },
               {
      path:"reactclass",
      element:<ReactClass />
    },


                 {
      path:"reactprops",
      element:<ReactProps />
    },

                    {
      path:"reactpropsdestructuring",
      element:<ReactPropsDestructuring />
    },


                     {
      path:"reactpropschildren",
      element:<ReactPropsChildren />
    },
    

                        {
      path:"reactevents",
      element:<ReactEvents />
    },

                        {
      path:"reactconditional",
      element:<ReactConditional />
    },

                            {
      path:"reactlist",
      element:<ReactLists />
    },
    

                                {
      path:"reactforms",
      element:<ReactForms />
    },
    
    
    
    
    
    
    
    
    
    






















  








   




   

    
    








    






      













  ]);

  return <RouterProvider router={router} />;
};

export default App;
