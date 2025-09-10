import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarExcel = () => {
  const tutorialLinks = [
    { name: "Excel HOME", path: "/excel" },
    { name: "Excel Introduction", path: "/excelintroduction" },
    { name: "Excel Get Started", path: "/excelgetstarted" },
    { name: "Excel Overview", path: "/exceloverview" },
    { name: "Excel Syntax", path: "/excelsyntax" },
    { name: "Excel Ranges", path: "/excelranges" },
    { name: "Excel Fill", path: "/excelfill" },
    { name: "Excel Move Cells", path: "/excelmovecell" },
    { name: "Excel Add Cells", path: "/exceladdcells" },
    { name: "Excel Delete Cells", path: "/exceldeletecells" },
    { name: "Excel Undo Redo", path: "/excelundoredo" },
    { name: "Excel Formulas", path: "/excelformulas" },
    { name: "Excel Relative Reference", path: "/excelrelativereference" },
    { name: "Excel Absolute Reference", path: "/excelabsolutereference" },
    { name: "Excel Arithmetic Operators", path: "/excelarithmeticoperators" },
    { name: "Excel Parentheses", path: "/excelparentheses" },
    { name: "Excel Functions", path: "/excelfunctions" },
  ];

  const formattingLinks = [
    { name: "Excel Formatting", path: "/excelformatting" },
    { name: "Excel Format Painter", path: "/excelformatpainter" },
    { name: "Excel Format Colors", path: "/excelformatcolors" },
    { name: "Excel Format Fonts", path: "/excelformatfonts" },
    { name: "Excel Format Borders", path: "/excelformatborders" },
    { name: "Excel Format Numbers", path: "/excelformatnumbers" },
    { name: "Excel Format Grids", path: "/excelformatgrids" },
    { name: "Excel Format Settings", path: "/excelformatsettings" },
  ];

  const dataAnalysisLinks = [
    { name: "Excel Sort", path: "/excelsort" },
    { name: "Excel Filter", path: "/excelfilter" },
    { name: "Excel Tables", path: "/exceltables" },
    { name: "Excel Conditional Format", path: "/excelconditionalformat" },
    { name: "Excel Highlight Cell Rules", path: "/excelhighlightcellrules" },
    { name: "Excel Top Bottom Rules", path: "/exceltopbottomrules" },
    { name: "Excel Data Bars", path: "/exceldatabars" },
    { name: "Excel Color Scales", path: "/excelcolorscales" },
    { name: "Excel Icon Sets", path: "/exceliconsets" },
    { name: "Excel Manage Rules (CF)", path: "/excelmanagerules" },
    { name: "Excel Charts", path: "/excelcharts" },
  ];

  const tablePivotLinks = [
    { name: "Table Pivot Intro", path: "/tablepivotintro" },
  ];

  const caseLinks = [
    { name: "Case: Poke Mart", path: "/casepokemart" },
    { name: "Case: Poke Mart, Styling", path: "/casepokemartstyling" },
  ];

  const functionsLinks = [
    { name: "AND", path: "/exceland" },
    { name: "AVERAGE", path: "/excelaverage" },
    { name: "AVERAGEIF", path: "/excelaverageif" },
    { name: "AVERAGEIFS", path: "/excelaverageifs" },
    { name: "CONCAT", path: "/excelconcat" },
    { name: "COUNT", path: "/excelcount" },
    { name: "COUNTA", path: "/excelcounta" },
    { name: "COUNTBLANK", path: "/excelcountblank" },
    { name: "COUNTIF", path: "/excelcountif" },
    { name: "COUNTIFS", path: "/excelcountifs" },
    { name: "IF", path: "/excelif" },
    { name: "IFS", path: "/excelifs" },
    { name: "LEFT", path: "/excelleft" },
    { name: "LOWER", path: "/excellower" },
    { name: "MAX", path: "/excelmax" },
    { name: "MEDIAN", path: "/excelmedian" },
    { name: "MIN", path: "/excelmin" },
    { name: "MODE", path: "/excelmode" },
    { name: "NPV", path: "/excelnpv" },
    { name: "OR", path: "/excelor" },
    { name: "RAND", path: "/excelrand" },
    { name: "RIGHT", path: "/excelright" },
    { name: "STDEV.P", path: "/excelstdevp" },
    { name: "STDEV.S", path: "/excelstdevs" },
    { name: "SUM", path: "/excelsum" },
    { name: "SUMIF", path: "/excelsumif" },
    { name: "SUMIFS", path: "/excelsumifs" },
    { name: "TRIM", path: "/exceltrim" },
    { name: "VLOOKUP", path: "/excelvlookup" },
    { name: "XOR", path: "/excelxor" },
  ];

  const howToLinks = [
    { name: "Convert Time to Seconds", path: "/excelconverttime" },
    { name: "Difference Between Times", path: "/exceldifferencebetween" },
    { name: "NPV (Net Present Value)", path: "/excelnpvcase" },
    { name: "Remove Duplicates", path: "/excelremoveduplicates" },
  ];

  return (
    <div className="col-lg-2 col-md-3 d-none d-md-block p-3 bg-light sidebar-fixed sidebar-link sidebar">
      <h5 className="fw-bold">Excel Tutorial</h5>
      <ul className="list-unstyled">
        {tutorialLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">Excel Formatting</h5>
      <ul className="list-unstyled">
        {formattingLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">Excel Data Analysis</h5>
      <ul className="list-unstyled">
        {dataAnalysisLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">Table Pivot</h5>
      <ul className="list-unstyled">
        {tablePivotLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">Excel Case</h5>
      <ul className="list-unstyled">
        {caseLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">Excel Functions</h5>
      <ul className="list-unstyled">
        {functionsLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">Excel How To</h5>
      <ul className="list-unstyled">
        {howToLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarExcel;
