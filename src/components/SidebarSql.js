import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarSql = () => {
  const sqlLinks = [
    { name: "SQL HOME", path: "/sql" },
    { name: "SQL Intro", path: "/sqlintroduction" },
    { name: "SQL Syntax", path: "/sqlsyntax" },
    { name: "SQL Select", path: "/sqlselect" },
    { name: "SQL Select Distinct", path: "/sqlselectdistinct" },
    { name: "SQL Where", path: "/sqlwhere" },
    { name: "SQL Order By", path: "/sqlorderby" },
    { name: "SQL And", path: "/sqland" },
    { name: "SQL Or", path: "/sqlor" },
    { name: "SQL Not", path: "/sqlnot" },
    { name: "SQL Insert Into", path: "/sqlinsert" },
    { name: "SQL Null Values", path: "/sqlnullvalues" },
    { name: "SQL Update", path: "/sqlupdate" },
    { name: "SQL Delete", path: "/sqldelete" },
    { name: "SQL Select Top", path: "/sqltop" },
    { name: "SQL Aggregate Functions", path: "/sqlaggregatefunction" },
    { name: "SQL Min and Max", path: "/sqlminmax" },
    { name: "SQL Count", path: "/sqlcount" },
    { name: "SQL Sum", path: "/sqlsum" },
    { name: "SQL Avg", path: "/sqlavg" },
    { name: "SQL Like", path: "/sqllike" },
    { name: "SQL Wildcards", path: "/sqlwildcard" },
    { name: "SQL In", path: "/sqlinoperator" },
    { name: "SQL Between", path: "/sqlbetween" },
    { name: "SQL Aliases", path: "/sqlaliases" },
    { name: "SQL Joins", path: "/sqljoins" },
    { name: "SQL Inner Join", path: "/sqlinnerjoin" },
    { name: "SQL Left Join", path: "/sqlleftjoin" },
    { name: "SQL Right Join", path: "/sqlrightjoin" },
    { name: "SQL Full Join", path: "/sqlfulljoin" },
    { name: "SQL Self Join", path: "/sqlselfjoin" },
    { name: "SQL Union", path: "/sqlunion" },
    { name: "SQL Union All", path: "/SqlUnionAll" },
    { name: "SQL Group By", path: "/sqlgroupby" },
    { name: "SQL Having", path: "/sqlhaving" },
    { name: "SQL Exists", path: "/sqlexists" },
    { name: "SQL Any, All", path: "/sqlanyall" },
    { name: "SQL Select Into", path: "/sqlselectintro" },
    { name: "SQL Insert Into Select", path: "/sqlselectintroselect" },
    { name: "SQL Case", path: "/sqlcase" },
    { name: "SQL Null Functions", path: "/sqlnullfunctions" },
    { name: "SQL Stored Procedures", path: "/sqlstoredprocedure" },
    { name: "SQL Comments", path: "/sqlcomments" },
    { name: "SQL Operators", path: "/sqloperators" },
  ];

  const dbLinks = [
    { name: "SQL Create DB", path: "/sqlcreatedatabase" },
    { name: "SQL Drop DB", path: "/sqldropdatabase" },
    { name: "SQL Backup DB", path: "/sqlbackupdatabase" },
    { name: "SQL Create Table", path: "/sqlcreatetable" },
    { name: "SQL Drop Table", path: "/sqldroptable" },
    { name: "SQL Alter Table", path: "/sqlaltertable" },
    { name: "SQL Constraints", path: "/sqlconstraints" },
    { name: "SQL Not Null", path: "/sqlnotnull" },
    { name: "SQL Unique", path: "/sqlunique" },
    { name: "SQL Primary Key", path: "/sqlprimarykey" },
    { name: "SQL Foreign Key", path: "/sqlforeignkey" },
    { name: "SQL Check", path: "/sqlcheck" },
    { name: "SQL Default", path: "/sqldefault" },
    { name: "SQL Index", path: "/sqlindex" },
    { name: "SQL Auto Increment", path: "/sqlautoincrement" },
    { name: "SQL Dates", path: "/sqldates" },
    { name: "SQL Views", path: "/sqlviews" },
    { name: "SQL Injection", path: "/sqlinjection" },
    { name: "SQL Hosting", path: "/sqlhosting" },
    { name: "SQL Data Types", path: "/sqldatatypes" },
  ];

  return (
    <div className="col-lg-2 col-md-3 d-none d-md-block p-3 bg-light sidebar-fixed sidebar-link sidebar">
      <h5 className="fw-bold">SQL Tutorial</h5>
      <ul className="list-unstyled">
        {sqlLinks.map((link) => (
          <li key={link.path}>
            <NavLink 
              to={link.path} 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">SQL Database</h5>
      <ul className="list-unstyled">
        {dbLinks.map((link) => (
          <li key={link.path}>
            <NavLink 
              to={link.path} 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarSql;

