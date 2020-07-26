<template>
  <section class="container">
    <div class="left-half">
      <div class="content">
        <p>I've been a member of the I.T. community for over 30 years and consider myself a full stack developer.
          I pick up new technologies rapidly with a minimum of downtime, have excellent communication skills,
          love to accept new challenges and would be an asset to any project.
          <br><br>
          If interested please download my current resume in
          <a href="DonJensenResume.doc" target="_blank">DOC</a> or
          <a href="DonJensenResume.pdf" target="_blank">PDF</a> format
        </p>
        <header class="section-header">Experience</header>
        <hr>
        <div class="experience-group">
          <div class="experience-header">2018 - Present: Sr. Software Engineer</div>
          <div class="experience-header">Federal Reserve Bank of Kansas City, Omaha Branch</div>
          <div class="experience-summary">
            I work on maintaining http://www.navycash.com as well as backend processes related to EagleCash/NavyCash
            Stored Value Card, Strip/Chip, transaction processing.</div>
          <div class="experience-bullet">
            <ul>
              <li>Upgraded from Angular 1.x to 6.</li>
              <li>Upgraded backend testing from JUnit4 to JUnit5.</li>
              <li>Created Single Sign-on System for Card Key Management.</li>
              <li>Used Spring Boot, Hibernate.</li>
              <li>Used Java SmartIO Package to communicate with smart cards and readers.</li>
              <li>Used C# to create Proof of Concept Application</li>
            </ul>
          </div>
        </div>
        <div class="experience-group">
          <div class="experience-header">2015 - 2018: Sr. Programmer</div>
          <div class="experience-header">Proxibid, Omaha, Ne</div>
          <div class="experience-summary">
            I worked on maintaining http://www.proxibid.com as well as the new Proxibid 2.0 environment.
          </div>
          <div class="experience-bullet">
            <ul>
              <li>Helped create new environment utilizing MicroServices, Spring Boot with Vue & Bootstrap</li>
              <li>Java Spring Boot with Hibernate.</li>
              <li>Creation/Maintenance of Restful endpoints.</li>
              <li>Used Backbone with JQuery for Legacy Frontend.</li>
              <li>Gradle/Maven builds.</li>
            </ul>
          </div>
        </div>
        <div class="experience-group">
          <div class="experience-header">2011 - 2015: Sr. Programmer</div>
          <div class="experience-header">Election Systems & Software, Omaha, Ne</div>
          <div class="experience-summary">
            I worked as part of the research and development, Innovations, on new software options for the election
            environment including internet voting.
          </div>
          <div class="experience-bullet">
            <ul>
              <li>Used Java and C++ to maintain legacy systems</li>
              <li>Use of Apache PDFBox, iText and Qoppa PDFImages to create dynamic PDF documents,
                including QR codes and interactive fields.</li>
              <li>Use of Maven and Mercurial manage building and storing of code base.</li>
              <li>Use of Spring Frameworks.</li>
              <li>Use of PostgeSQL for DB.</li>
              <li>Use of HTML, Bootstrap, JQuery, Swing and QT for UI creation.</li>
            </ul>
          </div>
        </div>
        <div class="experience-group">
          <div class="experience-header">2007 - 2011: Sr. Programmer/Analyst</div>
          <div class="experience-header">Oriental Trading Company, Omaha, Ne</div>
          <div class="experience-summary">
            I worked on maintaining the main call center application as well as the website.
          </div>
          <div class="experience-bullet">
            <ul>
              <li>Use of Java Swing, Struts/Tiles for UI elements.</li>
              <li>Use of Java/J2EE for backend.</li>
              <li>Use of Websphere 4.0/5.1</li>
              <li>Use of Sharepoint to create internal specialized productivity website.</li>
              <li>Use of Eclipse and Visual Studio.</li>
            </ul>
          </div>
        </div>
        <div class="experience-group">
          <div class="experience-header">2006 - 2006: Sr. Programmer: Consultant</div>
          <div class="experience-header">Net Integrated Consulting, Des Moines, Ia</div>
          <div class="experience-summary">
            I worked on converting http://www.livingthecontrylife.com to ATG Dynamo.
          </div>
          <div class="experience-bullet">
            <ul>
              <li>Use of Java/J2EE to create new code on ATG Dynamo platform.</li>
              <li>Use of HTML, JHTML, JSP for web UI.</li>
              <li>Use of IntelliJ as the main IDE.</li>
              <li>Use of Oracle as the backend DB.</li>
            </ul>
          </div>
        </div>
        <div class="experience-group">
          <div class="experience-header">2005 - 2006: Sr. Programmer: Consultant</div>
          <div class="experience-header">Linoma Logic/ Linoma Technology, Omaha, Ne</div>
          <div class="experience-summary">
            I worked on creating new applications using C# and SQL Server in a Windows environment.
          </div>
          <div class="experience-bullet">
            <ul>
              <li>Use of Enterprise Architect to create to database</li>
              <li>Use of Visual Studio and ASNA VRPG to create applications.</li>
              <li>Use of C# and Visual RPG for front end.</li>
              <li>Use of ILE RPG IV, with embedded SQL, to create batch and service programs.</li>
            </ul>
          </div>
        </div>
        <div v-if="hideMore"><a href="javascript:void(0)" @click.prevent="hideMore = !hideMore">Show full resume</a></div>
        <div  v-if="!hideMore" class="experience-group">
          <div class="experience-header">2004 - 2005: Programmer: Consultant</div>
          <div class="experience-header">Bass & Associates, Omaha, Ne</div>
          <div class="experience-summary">
            I worked on converting an FTP NCOA process to RPGIV.
          </div>
          <div class="experience-bullet">
            <ul>
              <li>Use of RPG IV to create service, interactive and batch programs.</li>
              <li>Use of Free Form RPG with Embedded SQL.</li>
              <li>Use of Code/400.</li>
            </ul>
          </div>
        </div>
        <div v-if="!hideMore" class="experience-group">
          <div class="experience-header">2004 - 2004: Programmer: Consultant</div>
          <div class="experience-header">Net Integrated Consulting, Des Moines, Ia</div>
          <div class="experience-summary">
            I worked on the conversion of http://www.agriculture.com/ to ATG/Dynamo 5.6.1.
          </div>
          <div class="experience-bullet">
            <ul>
              <li>Use of Java(EE), EJB, to create form handlers and classes by extending existing Dynamo classes.</li>
              <li>Use Java to create scheduled programs to query external URLs (xml.futuresource.com) for XML documents,
                parse those using JDom classes, and save them to Oracle 9i backend tables.</li>
              <li>Create Dynamo droplet to show dynamic content using Java.</li>
              <li>Set up of backend Oracle 9i database tables.</li>
              <li>Write all supporting repository XML and properties files.</li>
              <li>Mentor the creation of JHTML front-end pages using droplets, HTML and JavaScript.</li>
            </ul>
          </div>
        </div>
        <div v-if="!hideMore" class="experience-group">
          <div class="experience-header">2000 - 2004: Programmer: Consultant</div>
          <div class="experience-header">Linoma Logic: Omaha, Ne</div>
          <div class="experience-summary">
            I worked on multiple projects while at Linoma Logic focusing on Java technologies as well as RPG and Delphi.
          </div>
          <div class="experience-bullet">
            <ul>
              <li>Worked on projects utilizing ATG Dynamo platform with Oracle</li>
              <li>Worked on projects utilizing Delphi 6 & 7 and ILE RPG</li>
              <li>Worked on projects utilizing Java 1.3</li>
              <li>Worked on projects utilizing AS/400</li>
              <li>Worked on projects utilizing the Unix platform</li>
            </ul>
          </div>
        </div>
        <div v-if="!hideMore" class="experience-group">
          <div class="experience-header">1999 - 2000: Sr. Programmer Analyst</div>
          <div class="experience-header">MemberWorks, Omaha, Ne</div>
          <div class="experience-summary">
            While at MemberWorks, I worked on projects using AS/400
          </div>
          <div class="experience-bullet">
            <ul>
              <li>Created and maintained program on the AS/400 utilizing RPGIV (ILE).</li>
              <li>Heavy use of SQL/400 to pull, modify and fix system data.</li>
              <li>Programmed with RPGIV and SDA to produce interactive maintenance programs.</li>
              <li>Used and have knowledge of system API's and user spaces.</li>
            </ul>
          </div>
        </div>
        <div v-if="!hideMore" class="experience-group">
          <div class="experience-header">1998 - 1999: Sr. Programmer Analyst</div>
          <div class="experience-header">Guarantee Life, Omaha, Ne</div>
          <div class="experience-summary">
            Projects using Borland’s Delphi 4.0, AS/400 and Client Object’s Delphi/400
          </div>
          <div class="experience-bullet">
            <ul>
              <li>Created new GUI interface to AS/400 systems using Delphi/400.</li>
              <li>Created Delphi interface to Oracle/AS400 database.</li>
              <li>Responsible for data collections from DB2/400 and Oracle databases to maintain Data Marts.</li>
              <li>Responsible for Mainframe System to PC data transfer programs.</li>
              <li>Performed Windows 95 API programming.</li>
              <li>Created custom components for use with reporting.</li>
              <li>Created and maintained the Work Application Folder (WAF) imaging system.</li>
              <li>Responsible for System API programming including user spaces, UIM menus, imbedded SQL and SDA.</li>
            </ul>
          </div>
        </div>
        <div v-if="!hideMore" class="experience-group">
          <div class="experience-header">1996 - 1998: Database Developer and Webmaster</div>
          <div class="experience-header">Sitel Corp, Omaha, ne</div>
          <div class="experience-summary">
          </div>
          <div class="experience-bullet">
            <ul>
              <li>Used Delphi to create GUI applications</li>
              <li>Worked with the Informix Server and Informix 4GL</li>
              <li>Created/maintain division intranet web site using 4GL, Perl, server side Java, Javascript, and HTML.</li>
              <li>Programmed Internet application with CGI utilizing 4GL and Perl.</li>
              <li>Created and maintained stored procedures using an INFORMIX database.</li>
            </ul>
          </div>
        </div>
        <div v-if="!hideMore" class="experience-group">
          <div class="experience-header">1994 - 1996: Programmer Analyst</div>
          <div class="experience-header">Mid America Computer Corp, Blair, Ne</div>
          <div class="experience-summary">
            First full time programming job
          </div>
          <div class="experience-bullet">
            <ul>
              <li>Created custom components for new, Windows compliant, and GUI screens using Delphi.</li>
              <li>Interfaced with SQL Server stored procedures for data manipulation using Delphi.</li>
              <li>Converted legacy software business rules into object Pascal coding using Delphi.</li>
              <li>Created reports using ReportSmith.</li>
              <li>Created and maintained client code utilizing RPG on both the BABY/36 and the AS/400.</li>
              <li>Converted System/36 RPGII programs to AS/400 RPG/400 programs.</li>
              <li>Installed and configured the AS/400 token ring card.</li>
              <li>Set up token ring connectivity to the AS/400 using PC Support for extended DOS.</li>
              <li>Rewrote old BABY/36 RPGII code to take advantage of PC based processes.</li>
              <li>Used SQL Server to create stored procedures to be utilized by Delphi and C++ processes.</li>
            </ul>
          </div>
        </div>
        <div v-if="!hideMore" class="experience-group">
          <div class="experience-header">1988 - 1994: Programmer/Operator</div>
          <div class="experience-header">Ancona Brothers, Omaha, Ne</div>
          <div class="experience-summary">
            I created and maintained in-house RPG code and nightly operations on the S/36 with associated nightly backup.
          </div>
          <div class="experience-bullet">
            <ul>
              <li>Coded using RPGII.</li>
              <li>Rewrote old inventory/order software to a bar-code inventory system.</li>
              <li>Performed nightly backup of system and ran batch jobs.</li>
            </ul>
          </div>
        </div>
        <div v-if="!hideMore"><a href="javascript:void(0)" @click.prevent="hideMore = !hideMore">Show less resume</a></div>
      </div>
    </div>
    <div class="right-half">
      <div class="content">
        <header class="section-header">Personal</header>
        <hr>
        <h3 class="sub-heading3">Contact</h3>
        <p>5735 South 113th Street
        <br>Omaha, Ne 68137
        <br>(402) 871-5244
        <br>dmj240@gmail.com</p>
        <h3 class="sub-heading3">Skills</h3>
        <h4 class="sub-heading3 with-bottom-border">Languages</h4>
        <p class="top-of-list">
          Java<br>
          JavaScript<br>
          HTML<br>
          CSS<br>
          C#<br>
          C++<br>
          Shell (Bash)<br>
          SQL
        </p>
        <h4 class="sub-heading3 with-bottom-border">Frameworks</h4>
        <p class="top-of-list">
          Spring<br>
          Hibernate<br>
          Angular 5+<br>
          Vue 2+<br>
          Backbone<br>
          Typescript<br>
          Git<br>
          SVN<br>
          Java Swing
        </p>
        <h4 class="sub-heading3 with-bottom-border">Databases</h4>
        <p class="top-of-list">
          Oracle<br>
          PostgreSQL<br>
          MySql<br>
          SQL Server<br>
          DB2
        </p>
        <h4 class="sub-heading3 with-bottom-border">Software</h4>
        <p class="top-of-list">
          IntelliJ Suite (IDEA, WebStorm, CLion)<br>
          XCode<br>
          Jenkins<br>
          Bamboo<br>
          BitBucket<br>
          Jira<br>
          Spring Tool Suite<br>
          Eclipse<br>
          Visual Studio
        </p>
        <h4 class="sub-heading3 with-bottom-border">Concepts</h4>
        <p class="top-of-list">
          OOD (Object Oriented Design)<br>
          TDD (Test Driven Design)<br>
          Functional Programming<br>
          Design Patterns<br>
          Unit Testing<br>
          CI/CD<br>
        </p>
        <h4 class="sub-heading3 with-bottom-border">Repositories</h4>
        <p class="top-of-list">
          <a href="https://github.com/shondu" target="_blank">GitHub</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: 'ResumePage',
      data () {
          return {
            hideMore: true
          }
      }
    }
</script>

<style scoped>
  body, section {
    height: 100%;
    font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 15px;
  }
  section > div {
    margin: 0;
  }
  section > div > header{
    top: 50px;
    font-size: 150%;
    font-weight: bold;
  }
  hr {
    width: 100%;
  }
  .experience-group{
    margin-top: 8px;
    margin-bottom: 5px;
    border-bottom: black 1px dotted;
  }
  .experience-header {
    font-size: 125%;
    font-weight: bold;
    margin: 2px;
  }
  .experience-summary{
    margin: 2px;
  }
  .experience-bullet {
    margin: 2px;
  }
  .experience-bullet > ul{
     margin: 2px;
   }
  .sub-heading3{
    margin-bottom: 0;
  }
  .with-bottom-border{
    width: 75%;
    border-bottom: black 1px dotted;
  }
  .top-of-list{
    margin-top: 8px;
  }
  .section-header{
    top: 50px;
    font-size: 150%;
    font-weight: bold;
  }
  .container {
  }
  .content{
    /*margin: 5px 0 5px 15px;*/
    margin: 10px;
  }
  .left-half {
    background-color: white;
  }
  .right-half {
    background-color: lightgray;
  }
  @media only screen and (min-width: 600px) {
    .container{
      display: flex;
    }
    .left-half{
      width: 70%;
    }
    .right-half{
      width: 30%;
    }
  }
</style>
