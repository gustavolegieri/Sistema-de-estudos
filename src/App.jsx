import { useState } from "react";

const C={bg:"#04050a",panel:"#090b12",card:"#0d0f1a",border:"#15172a",
  g:"#00e87a",b:"#00b8e6",o:"#ff5722",y:"#fbbf24",p:"#a78bfa",r:"#f43f5e",
  dim:"#333555",text:"#dde2f2",muted:"#686e96"};

/* ══════════════════════════════════════════════
   CURSOS 100% PT-BR · ÁUDIO PORTUGUÊS
   Estratégia: 1 curso sólido por área, curto e direto
══════════════════════════════════════════════ */
const COURSES=[
  {
    id:1,ph:1,color:C.g,icon:"⚡",
    area:"JavaScript Completo",weeks:"1–4",
    title:"JavaScript Curso COMPLETO com 6 Projetos REAIS",
    author:"Hcode — Jorge Aluísio & Guilherme Cabrini",
    platform:"Udemy 🇧🇷",
    hrs:38,hrsNote:"✅ 38h confirmadas na página Udemy",
    cert:true,free:false,price:"~R$27",rating:"4.6",students:"50k+",
    link:"https://www.udemy.com/course/javascript-curso-completo/",
    why:"O mais completo de JS em PT-BR. 38h cobrindo ES6+, OOP, DOM, Socket.IO, Node.js intro e 6 projetos reais do zero. Áudio profissional, código acompanha em tempo real.",
    projects:["WhatsApp Clone (Socket.IO)","DropBox Clone (upload de arquivos)","SPA em JS puro","Site completo com auth + gráficos"]
  },
  {
    id:2,ph:2,color:C.b,icon:"⚛️",
    area:"React",weeks:"5–6",
    title:"React JS do zero ao avançado na prática",
    author:"Matheus Fraga — Sujeito Programador",
    platform:"Udemy 🇧🇷",
    hrs:null,hrsNote:"⚠️ Horas não confirmadas — curso do Sujeito Programador, estilo direto ao ponto (~10–14h estimadas)",
    cert:true,free:false,price:"~R$27",rating:"4.8",students:"10k+",
    link:"https://www.udemy.com/course/curso-reactjs/",
    why:"Matheus Fraga é conhecido por cursos práticos e objetivos, sem enrolação. Cobre Hooks, React Router, Context API, Firebase e um projeto completo de sistema de chamados com login e banco de dados.",
    projects:["Sistema de chamados completo (login + CRUD + Firebase)","Landing pages com React"]
  },
  {
    id:3,ph:3,color:C.o,icon:"🟢",
    area:"Node.js + API REST",weeks:"7–8",
    title:"NodeJS do zero ao avançado na prática",
    author:"Matheus Fraga — Sujeito Programador",
    platform:"Udemy 🇧🇷",
    hrs:null,hrsNote:"⚠️ Horas não confirmadas — estilo Sujeito Programador, enxuto e prático (~10–15h estimadas)",
    cert:true,free:false,price:"~R$27",rating:"4.8",students:"8k+",
    link:"https://www.udemy.com/course/dev-fullstack/",
    why:"Node.js do zero com Express, MongoDB, MySQL, JWT e projetos práticos. O Matheus Fraga vai direto ao ponto sem teoria excessiva — ideal para quem quer construir APIs logo.",
    projects:["API REST com Express + MongoDB + JWT","Sistema de pizzaria (Node + React + deploy)"]
  },
  {
    id:4,ph:4,color:C.p,icon:"🔷",
    area:"TypeScript",weeks:"9",
    title:"TypeScript aprenda do zero ao avançado na prática",
    author:"Matheus Fraga — Sujeito Programador",
    platform:"Udemy 🇧🇷",
    hrs:null,hrsNote:"⚠️ Horas não confirmadas — cursos de TS do Sujeito Programador costumam ter 8–12h",
    cert:true,free:false,price:"~R$27",rating:"4.8",students:"5k+",
    link:"https://www.udemy.com/course/typescript-completo/",
    why:"TypeScript prático e sem enrolação. Types, interfaces, generics, integração com Node.js e React. Complementa diretamente os cursos anteriores — você vai tipar a API que já construiu.",
    projects:["CRUD tipado com TypeScript","API Node.js + Express 100% tipada com TS"]
  },
  {
    id:5,ph:5,color:C.y,icon:"▲",
    area:"Next.js",weeks:"10–11",
    title:"NextJS do zero ao avançado na prática",
    author:"Matheus Fraga — Sujeito Programador",
    platform:"Udemy 🇧🇷",
    hrs:null,hrsNote:"⚠️ Horas não confirmadas — curso enxuto, estimativa ~10–15h com vários projetos",
    cert:true,free:false,price:"~R$27",rating:"4.8",students:"8k+",
    link:"https://www.udemy.com/course/nextjs-zero-ao-avancado/",
    why:"Next.js na prática com SSR, SSG, App Router, autenticação, integração com banco e deploy na Vercel. Projetos reais desde o início — estilo Sujeito Programador, direto e objetivo.",
    projects:["Plataforma de vendas full-stack com Next.js + TypeScript","App com auth, pagamentos e deploy Vercel"]
  },
  {
    id:6,ph:6,color:C.r,icon:"🎯",
    area:"BÔNUS — Semana livre",weeks:"12",
    title:"Semana de projeto final + portfólio",
    author:"Você mesmo",platform:"GitHub + Vercel",
    hrs:10,hrsNote:"✅ 10h de prática pura — projeto, deploy e documentação",
    cert:false,free:true,price:"GRÁTIS",rating:"—",students:"—",
    link:"https://github.com",
    why:"Semana dedicada a finalizar e polir o projeto mais complexo que você fez, escrever READMEs profissionais, publicar tudo no GitHub e atualizar o LinkedIn com os certificados conquistados.",
    projects:["Projeto final full-stack documentado e deployado","LinkedIn + GitHub polidos"]
  }
];

/* ── SEMANAS ─────────────────────────────────── */
const WEEKS=[
  {w:1,ph:1,c:C.g,title:"JS: Base, DOM e Eventos",
   course:"JavaScript COMPLETO – Hcode",budget:"~7h vídeo + 3h prática",
   days:["Variáveis, tipos, operadores e lógica","Funções, escopo e hoisting","Arrays, objetos e métodos ES6+","DOM — seleção, criação e manipulação","Eventos, formulários e Local Storage"],
   del:"Setup GitHub + 3 exercícios publicados"},
  {w:2,ph:1,c:C.g,title:"JS: OOP, Async e Fetch",
   course:"JavaScript COMPLETO – Hcode",budget:"~7h vídeo + 3h prática",
   days:["Classes, protótipos e herança (OOP)","Promises, Async/Await e try/catch","Fetch API — consumir APIs públicas","ES Modules + Webpack básico","Início do projeto SPA em JS puro"],
   del:"📦 SPA em JS puro no GitHub"},
  {w:3,ph:1,c:C.g,title:"JS: Socket.IO e Projetos",
   course:"JavaScript COMPLETO – Hcode",budget:"~7h vídeo + 3h prática",
   days:["Socket.IO — comunicação em tempo real","WhatsApp Clone — parte 1","WhatsApp Clone — parte 2 (câmera + áudio)","DropBox Clone — upload de arquivos","Deploy no GitHub Pages"],
   del:"💬 WhatsApp Clone no portfólio"},
  {w:4,ph:1,c:C.g,title:"JS: Node intro + Projeto Final",
   course:"JavaScript COMPLETO – Hcode",budget:"~7h vídeo + 3h prática",
   days:["Node.js intro — módulos e NPM","Express básico — rotas e middleware","Site completo com auth + gráficos Chart.js","REST API com upload de arquivos","Revisão + documentação dos 4 projetos"],
   del:"🚀 Site completo com auth — portfólio"},
  {w:5,ph:2,c:C.b,title:"React: Hooks e Componentes",
   course:"React JS – Sujeito Programador",budget:"~5h vídeo + 5h prática",
   days:["Components, JSX, Props e State","useState, useEffect e useRef","React Router — SPA com rotas","Formulários controlados e validação","Primeiro projeto React funcional"],
   del:"⚛️ App React no portfólio"},
  {w:6,ph:2,c:C.b,title:"React: Firebase e Projeto Final",
   course:"React JS – Sujeito Programador",budget:"~5h vídeo + 5h prática",
   days:["Context API — estado global","Firebase Auth — login e registro","Firestore — CRUD em tempo real","Sistema de chamados completo","Deploy do projeto no Firebase Hosting"],
   del:"🏢 Sistema de chamados deployado"},
  {w:7,ph:3,c:C.o,title:"Node.js: Express e MongoDB",
   course:"NodeJS – Sujeito Programador",budget:"~5h vídeo + 5h prática",
   days:["Node puro — event loop e módulos","Express — rotas, middleware e erros","MongoDB Atlas + Mongoose — CRUD","MVC Pattern — organização de projeto","API funcionando e testada no Postman"],
   del:"API Express + MongoDB rodando"},
  {w:8,ph:3,c:C.o,title:"Node.js: JWT, MySQL e Deploy",
   course:"NodeJS – Sujeito Programador",budget:"~5h vídeo + 5h prática",
   days:["JWT — autenticação stateless completa","Roles admin/user e proteção de rotas","MySQL + Sequelize — banco relacional","Upload de arquivos com Multer","Deploy no Render — API pública online"],
   del:"🔐 API REST com JWT deployada"},
  {w:9,ph:4,c:C.p,title:"TypeScript",
   course:"TypeScript – Sujeito Programador",budget:"~7h vídeo + 3h prática",
   days:["Types, interfaces, enums e type aliases","Generics e utility types (Partial, Readonly)","Classes tipadas e herança com TS","TS com Node.js + Express — tsconfig e ts-node","Refatorar a API da semana 8 para TypeScript"],
   del:"🔷 API Node.js 100% tipada com TS"},
  {w:10,ph:5,c:C.y,title:"Next.js: Fundamentos",
   course:"NextJS – Sujeito Programador",budget:"~5h vídeo + 5h prática",
   days:["App Router — layouts, rotas e loading","Server Components vs Client Components","Server Actions — formulários sem API route","Integração com MongoDB via Mongoose","Autenticação com NextAuth.js + Google"],
   del:"App Next.js com auth rodando"},
  {w:11,ph:5,c:C.y,title:"Next.js: Projeto Full-Stack",
   course:"NextJS – Sujeito Programador",budget:"~5h vídeo + 5h prática",
   days:["Integração de pagamentos (Stripe)","Deploy completo na Vercel","TypeScript + Next.js — integração final","SEO, metadata e performance","Plataforma de vendas completa finalizada"],
   del:"🛒 Plataforma full-stack deployada — portfólio"},
  {w:12,ph:6,c:C.r,title:"Semana do Portfólio Final",
   course:"Projeto próprio + GitHub",budget:"10h de prática pura",
   days:["Escolher e polir o melhor projeto","Escrever READMEs profissionais no GitHub","Documentar as APIs com Postman","Atualizar LinkedIn com certificados","Preparar apresentação do portfólio"],
   del:"🏆 Portfólio completo + LinkedIn atualizado"},
];

/* ── PROJETOS ─────────────────────────────────── */
const PROJS={
  "🌱 Iniciante":{c:C.g,items:[
    {t:"Calculadora Científica",tech:"HTML+CSS+JS",d:"Operações avançadas, histórico, tema dark/light e uso do teclado.",s:"DOM · CSS Grid · Events"},
    {t:"To-Do List Completa",tech:"React",d:"CRUD de tarefas, filtros, prioridades, animações e persistência.",s:"useState · useEffect · React"},
    {t:"Quiz com Timer",tech:"React + Open Trivia API",d:"Perguntas de API pública, cronômetro, ranking e animação de resultado.",s:"Fetch API · Hooks · State"},
    {t:"Buscador de CEP",tech:"JS + ViaCEP API",d:"Busca endereço, copia ao clipboard, histórico de buscas e loading.",s:"Async/Await · Fetch · DOM"},
  ]},
  "🔥 Intermediário":{c:C.o,items:[
    {t:"Sistema de Chamados",tech:"React + Firebase",d:"Login, CRUD de chamados por status, dashboard e regras de acesso.",s:"Firebase Auth · Firestore · React Router"},
    {t:"API REST com Auth",tech:"Node.js + MongoDB + JWT",d:"CRUD completo, JWT com refresh token, roles, upload e paginação.",s:"Express · Mongoose · JWT · Multer"},
    {t:"Chat em Tempo Real",tech:"Node.js + Socket.IO + React",d:"Salas, mensagens diretas, indicador de digitação, histórico persistido.",s:"Socket.IO · Node.js · MongoDB · React"},
    {t:"Dashboard Financeiro",tech:"React + Node.js + MySQL",d:"Transações, gráficos por período com Chart.js, filtros e export CSV.",s:"React · Sequelize · MySQL · Chart.js"},
    {t:"Blog com API",tech:"Node.js + TypeScript + Prisma",d:"Posts, categorias, comentários, auth JWT. 100% tipado com TypeScript.",s:"TypeScript · Prisma · PostgreSQL · JWT"},
  ]},
  "💎 Avançado":{c:C.y,items:[
    {t:"E-commerce Full-Stack",tech:"Next.js + Stripe + MongoDB",d:"Vitrine, carrinho, checkout real Stripe, painel admin e deploy Vercel.",s:"Next.js · Stripe · NextAuth · MongoDB"},
    {t:"SaaS de Gestão",tech:"Next.js + TypeScript + Prisma",d:"Kanban por times, convites, planos de assinatura com Stripe.",s:"Next.js · TypeScript · Prisma · Stripe"},
    {t:"API GraphQL",tech:"Node.js + Apollo + Redis",d:"Queries, mutations, subscriptions em tempo real e cache com Redis.",s:"GraphQL · Apollo Server · Redis · WebSockets"},
    {t:"Plataforma de Vídeos",tech:"Node.js + React + FFmpeg",d:"Upload, transcodificação HLS, player adaptativo e thumbnails automáticos.",s:"FFmpeg · Streams · React Player"},
  ]}
};

const CERTS=[
  {t:"JavaScript COMPLETO – 6 Projetos REAIS",p:"Udemy 🇧🇷 — Hcode",c:C.g,link:"https://www.udemy.com/course/javascript-curso-completo/"},
  {t:"React JS do zero ao avançado",p:"Udemy 🇧🇷 — Sujeito Programador",c:C.b,link:"https://www.udemy.com/course/curso-reactjs/"},
  {t:"NodeJS do zero ao avançado",p:"Udemy 🇧🇷 — Sujeito Programador",c:C.o,link:"https://www.udemy.com/course/dev-fullstack/"},
  {t:"TypeScript do zero ao avançado",p:"Udemy 🇧🇷 — Sujeito Programador",c:C.p,link:"https://www.udemy.com/course/typescript-completo/"},
  {t:"NextJS do zero ao avançado",p:"Udemy 🇧🇷 — Sujeito Programador",c:C.y,link:"https://www.udemy.com/course/nextjs-zero-ao-avancado/"},
];

const phColors={1:C.g,2:C.b,3:C.o,4:C.p,5:C.y,6:C.r};
const phNames={1:"JS Fundamentos",2:"React",3:"Node.js + APIs",4:"TypeScript",5:"Next.js",6:"Portfólio"};
const TABS=[["home","⌂ Início"],["cursos","◫ Cursos"],["semanas","⊞ Semanas"],["projetos","◉ Projetos"],["certs","★ Certs"]];

/* ── ATOMS ── */
const Tag=({color,children,sm})=>(
  <span style={{background:`${color}18`,color,border:`1px solid ${color}28`,
    padding:sm?"1px 7px":"3px 11px",borderRadius:99,fontSize:sm?10:11,fontWeight:700,
    letterSpacing:.3,whiteSpace:"nowrap"}}>{children}</span>);
const Bar=({pct,color,h=5})=>(
  <div style={{background:C.border,borderRadius:99,height:h,overflow:"hidden"}}>
    <div style={{width:`${pct}%`,height:"100%",background:color,borderRadius:99,transition:"width 1s"}}/></div>);
const Dot=({color})=>(
  <span style={{width:7,height:7,borderRadius:"50%",background:color,display:"inline-block",flexShrink:0,marginTop:4}}/>);

/* ══════════════════════════════════════════════ VIEWS ══ */

function HomeView({done}){
  const pct=Math.round((done.size/12)*100);
  return(
    <div style={{maxWidth:1060,margin:"0 auto",padding:"40px 28px 60px"}}>
      <div style={{marginBottom:44}}>
        <div style={{fontSize:10,color:C.g,letterSpacing:3,fontWeight:700,marginBottom:10}}>🇧🇷 100% ÁUDIO PORTUGUÊS · SEM INGLÊS</div>
        <h1 style={{fontSize:38,fontWeight:800,color:C.text,margin:"0 0 10px",lineHeight:1.15,letterSpacing:-1}}>
          Do zero ao<br/><span style={{color:C.g}}>full-stack JS</span>.
        </h1>
        <p style={{color:C.muted,fontSize:14,maxWidth:540,lineHeight:1.75,margin:"0 0 6px"}}>
          2h/dia · Seg–Sex · 12 semanas · Foco em backend.<br/>
          Todos os cursos com áudio em PT-BR — nenhuma palavra em inglês.
        </p>
        <div style={{background:"#fbbf2410",border:`1px solid ${C.y}25`,borderRadius:8,padding:"10px 14px",
          fontSize:12,color:C.y,marginBottom:28,maxWidth:620}}>
          ⚠️ <strong>Transparência:</strong> o curso Hcode tem <strong>38h confirmadas</strong>. Os cursos do Sujeito Programador têm horas não confirmadas nas páginas oficiais — são cursos conhecidos por serem enxutos (estimativa 8–15h cada). Verifique ao comprar.
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10,marginBottom:28}}>
          {[["120h","Estudo total",C.g],["38h","Hcode — confirmado",C.o],["12","Semanas",C.b],["5","Certificados",C.y],[`~R$135`,"5 cursos Udemy",C.p]]
            .map(([v,l,co])=>(
            <div key={l} style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:10,
              padding:"14px 12px",borderBottom:`2px solid ${co}`}}>
              <div style={{fontSize:22,fontWeight:800,color:co,letterSpacing:-1}}>{v}</div>
              <div style={{fontSize:10,color:C.dim,letterSpacing:1.1,marginTop:3}}>{l.toUpperCase()}</div>
            </div>))}
        </div>
        <div style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:12,padding:20,marginBottom:16}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
            <span style={{fontSize:11,color:C.muted,fontWeight:700,letterSpacing:1}}>PROGRESSO GERAL</span>
            <span style={{fontSize:18,fontWeight:800,color:C.g}}>{pct}%</span>
          </div>
          <Bar pct={pct} color={C.g} h={7}/>
          <div style={{fontSize:11,color:C.dim,marginTop:8}}>{done.size}/12 semanas · marque em "Semanas"</div>
        </div>
      </div>
      <div style={{fontSize:10,color:C.dim,letterSpacing:2,fontWeight:700,marginBottom:14}}>FASES</div>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {[1,2,3,4,5,6].map(ph=>{
          const weeks=WEEKS.filter(w=>w.ph===ph);
          const course=COURSES.find(c=>c.ph===ph);
          const phDone=weeks.filter(w=>done.has(w.w)).length;
          const phPct=Math.round((phDone/weeks.length)*100);
          return(
            <div key={ph} style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:11,
              padding:16,display:"grid",gridTemplateColumns:"46px 1fr 46px",gap:14,alignItems:"center"}}>
              <div style={{width:42,height:42,borderRadius:"50%",border:`2px solid ${phColors[ph]}`,
                background:`${phColors[ph]}12`,display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:11,fontWeight:800,color:phColors[ph]}}>F{ph}</div>
              <div>
                <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:3,flexWrap:"wrap"}}>
                  <span style={{fontWeight:700,fontSize:13,color:C.text}}>{phNames[ph]}</span>
                  <Tag color={phColors[ph]} sm>Sem {course?.weeks}</Tag>
                  {course?.hrs
                    ?<Tag color={C.g} sm>✅ {course.hrs}h</Tag>
                    :<Tag color={C.y} sm>⚠️ horas a verificar</Tag>}
                </div>
                <Bar pct={phPct} color={phColors[ph]}/>
              </div>
              <div style={{fontSize:16,fontWeight:800,color:phPct===100?phColors[ph]:C.dim,textAlign:"right"}}>{phPct}%</div>
            </div>);})}
      </div>
    </div>);}

function CoursesView(){
  const [sel,setSel]=useState(null);
  return(
    <div style={{maxWidth:1060,margin:"0 auto",padding:"40px 28px 60px"}}>
      <div style={{marginBottom:24}}>
        <div style={{fontSize:10,color:C.dim,letterSpacing:2,fontWeight:700,marginBottom:8}}>CURSOS</div>
        <h2 style={{fontSize:26,fontWeight:800,color:C.text,margin:"0 0 6px"}}>🇧🇷 Áudio Português. Sem inglês.</h2>
        <p style={{color:C.muted,fontSize:13,margin:0}}>
          1 curso Hcode (JS base, 38h confirmadas) + 4 cursos Sujeito Programador (curtos, diretos, horas a verificar). Clique para expandir.
        </p>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {COURSES.map(c=>{
          const open=sel===c.id;
          return(
            <div key={c.id} onClick={()=>setSel(open?null:c.id)}
              style={{background:C.panel,border:`1px solid ${open?c.color:C.border}`,borderRadius:12,
                cursor:"pointer",transition:"border-color .2s",borderLeft:`3px solid ${c.color}`,overflow:"hidden"}}>
              <div style={{padding:"16px 20px",display:"grid",gridTemplateColumns:"30px 1fr auto",gap:14,alignItems:"center"}}>
                <span style={{fontSize:20,textAlign:"center"}}>{c.icon}</span>
                <div>
                  <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center",marginBottom:4}}>
                    <span style={{fontWeight:700,fontSize:14,color:C.text}}>{c.title}</span>
                    {c.cert&&<Tag color={C.y} sm>🏆 Cert</Tag>}
                    <Tag color={C.b} sm>🇧🇷 PT-BR</Tag>
                    {c.hrs?<Tag color={C.g} sm>✅ {c.hrs}h</Tag>:<Tag color={C.y} sm>⚠️ verificar horas</Tag>}
                  </div>
                  <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                    <span style={{fontSize:12,color:C.muted}}>{c.author}</span>
                    <span style={{fontSize:12,color:C.dim}}>⭐ {c.rating} · {c.students}</span>
                    <Tag color={c.color} sm>Sem {c.weeks}</Tag>
                    <Tag color={C.dim} sm>{c.price}</Tag>
                  </div>
                </div>
                <span style={{fontSize:11,color:C.dim}}>{open?"▲":"▼"}</span>
              </div>
              {open&&(
                <div style={{padding:"0 20px 20px",borderTop:`1px solid ${C.border}`}}>
                  <div style={{background:`${C.y}0c`,border:`1px solid ${C.y}20`,borderRadius:7,
                    padding:"8px 12px",margin:"14px 0",fontSize:12,color:C.y}}>{c.hrsNote}</div>
                  <p style={{color:C.muted,fontSize:13,lineHeight:1.75,marginBottom:14}}>{c.why}</p>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:16}}>
                    <div>
                      <div style={{fontSize:10,color:C.dim,letterSpacing:1.5,fontWeight:700,marginBottom:8}}>PROJETOS INCLUSOS</div>
                      {c.projects.map((p,i)=>(
                        <div key={i} style={{display:"flex",gap:8,alignItems:"flex-start",
                          background:C.card,borderRadius:7,padding:"7px 12px",marginBottom:6,
                          border:`1px solid ${C.border}`,fontSize:12,color:C.text}}>
                          <Dot color={c.color}/><span>{p}</span>
                        </div>))}
                    </div>
                    <div style={{display:"flex",flexDirection:"column",gap:8,justifyContent:"flex-end"}}>
                      <a href={c.link} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}
                        style={{display:"inline-flex",alignItems:"center",gap:6,background:`${c.color}18`,
                          color:c.color,border:`1px solid ${c.color}40`,borderRadius:8,
                          padding:"10px 18px",fontSize:12,fontWeight:700,textDecoration:"none",justifyContent:"center"}}>
                        ↗ Acessar — {c.price}
                      </a>
                    </div>
                  </div>
                </div>)}
            </div>);})}
      </div>
    </div>);}

function WeeksView({done,setDone}){
  const [sel,setSel]=useState(null);
  const toggle=w=>{const s=new Set(done);s.has(w)?s.delete(w):s.add(w);setDone(s);};
  return(
    <div style={{maxWidth:1060,margin:"0 auto",padding:"40px 28px 60px"}}>
      <div style={{marginBottom:28}}>
        <div style={{fontSize:10,color:C.dim,letterSpacing:2,fontWeight:700,marginBottom:8}}>PLANO SEMANAL</div>
        <h2 style={{fontSize:26,fontWeight:800,color:C.text,margin:"0 0 6px"}}>12 semanas · 2h/dia · Seg–Sex</h2>
        <p style={{color:C.muted,fontSize:13,margin:0}}>Clique para ver o plano dia a dia. Marque ✓ para registrar conclusão.</p>
      </div>
      {[1,2,3,4,5,6].map(ph=>(
        <div key={ph} style={{marginBottom:28}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
            <span style={{fontSize:11,fontWeight:700,color:phColors[ph],letterSpacing:1}}>{phNames[ph].toUpperCase()}</span>
            <div style={{flex:1,height:1,background:C.border}}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:10}}>
            {WEEKS.filter(w=>w.ph===ph).map(w=>{
              const isDone=done.has(w.w),isOpen=sel===w.w,co=phColors[ph];
              return(
                <div key={w.w} style={{background:C.panel,border:`1px solid ${isOpen?co:isDone?`${co}40`:C.border}`,
                  borderRadius:10,overflow:"hidden",opacity:isDone?.8:1,transition:"all .2s"}}>
                  <div onClick={()=>setSel(isOpen?null:w.w)} style={{padding:"14px 16px",cursor:"pointer"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                      <span style={{background:`${co}18`,color:co,fontSize:10,fontWeight:700,
                        padding:"2px 8px",borderRadius:4,letterSpacing:.5}}>SEM {w.w}</span>
                      <button onClick={e=>{e.stopPropagation();toggle(w.w);}}
                        style={{width:24,height:24,borderRadius:"50%",border:`1.5px solid ${isDone?co:C.dim}`,
                          background:isDone?co:"transparent",cursor:"pointer",fontSize:12,color:isDone?C.bg:C.dim,
                          fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        {isDone?"✓":""}
                      </button>
                    </div>
                    <div style={{fontWeight:700,fontSize:14,color:isDone?C.dim:C.text,marginBottom:2,lineHeight:1.3}}>{w.title}</div>
                    <div style={{fontSize:10,color:C.dim,marginBottom:2}}>{w.course}</div>
                    <div style={{fontSize:10,color:co,marginBottom:8}}>{w.budget}</div>
                    <div style={{background:`${co}0d`,border:`1px solid ${co}18`,borderRadius:6,
                      padding:"5px 9px",fontSize:11,color:co,lineHeight:1.4}}>📦 {w.del}</div>
                  </div>
                  {isOpen&&(
                    <div style={{borderTop:`1px solid ${C.border}`,padding:"12px 16px",background:C.card}}>
                      <div style={{fontSize:10,color:C.dim,letterSpacing:1.5,fontWeight:700,marginBottom:8}}>DIA A DIA</div>
                      {w.days.map((d,i)=>(
                        <div key={i} style={{display:"flex",gap:10,marginBottom:6,alignItems:"flex-start"}}>
                          <span style={{fontSize:10,color:co,fontWeight:700,minWidth:24,marginTop:1}}>D{i+1}</span>
                          <span style={{fontSize:12,color:C.muted,lineHeight:1.5}}>{d}</span>
                        </div>))}
                    </div>)}
                </div>);})}
          </div>
        </div>))}
    </div>);}

function ProjectsView(){
  const [filter,setFilter]=useState("Todos");
  const lvls=Object.keys(PROJS);
  const shown=(filter==="Todos"?lvls:[filter]).flatMap(l=>PROJS[l].items.map(p=>({...p,lvl:l,color:PROJS[l].c})));
  return(
    <div style={{maxWidth:1060,margin:"0 auto",padding:"40px 28px 60px"}}>
      <div style={{marginBottom:22}}>
        <div style={{fontSize:10,color:C.dim,letterSpacing:2,fontWeight:700,marginBottom:8}}>PROJETOS PARA PORTFÓLIO</div>
        <h2 style={{fontSize:26,fontWeight:800,color:C.text,margin:"0 0 6px"}}>Do simples ao avançado.</h2>
        <p style={{color:C.muted,fontSize:13,margin:"0 0 16px"}}>Cada projeto é uma peça do seu portfólio. Construa enquanto aprende.</p>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          {["Todos",...lvls].map(f=>(
            <button key={f} onClick={()=>setFilter(f)}
              style={{padding:"6px 14px",borderRadius:20,border:`1px solid ${filter===f?C.g:C.border}`,
                background:filter===f?`${C.g}14`:C.panel,color:filter===f?C.g:C.muted,
                cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"inherit"}}>
              {f}</button>))}
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(255px,1fr))",gap:12}}>
        {shown.map((p,i)=>(
          <div key={i} style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:11,
            padding:18,borderTop:`2px solid ${p.color}`,display:"flex",flexDirection:"column",gap:8}}>
            <Tag color={p.color} sm>{p.lvl}</Tag>
            <div style={{fontWeight:700,fontSize:14,color:C.text}}>{p.t}</div>
            <Tag color={C.dim} sm>{p.tech}</Tag>
            <div style={{fontSize:13,color:C.muted,lineHeight:1.65,flex:1}}>{p.d}</div>
            <div style={{borderTop:`1px solid ${C.border}`,paddingTop:8,fontSize:11,color:C.dim}}>{p.s}</div>
          </div>))}
      </div>
    </div>);}

function CertsView(){
  return(
    <div style={{maxWidth:800,margin:"0 auto",padding:"40px 28px 60px"}}>
      <div style={{marginBottom:28}}>
        <div style={{fontSize:10,color:C.dim,letterSpacing:2,fontWeight:700,marginBottom:8}}>CERTIFICADOS</div>
        <h2 style={{fontSize:26,fontWeight:800,color:C.text,margin:"0 0 6px"}}>O que você conquista ao final.</h2>
        <p style={{color:C.muted,fontSize:13,margin:0}}>Todos Udemy 🇧🇷 com certificado digital adicionável ao LinkedIn. Acesso vitalício.</p>
      </div>
      {CERTS.map((c,i)=>(
        <div key={i} style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:11,
          padding:18,marginBottom:10,display:"flex",justifyContent:"space-between",alignItems:"center",
          borderLeft:`3px solid ${c.c}`,flexWrap:"wrap",gap:10}}>
          <div>
            <div style={{fontWeight:700,fontSize:14,color:C.text,marginBottom:4}}>🏆 {c.t}</div>
            <div style={{fontSize:12,color:C.muted}}>{c.p} · Certificado digital · LinkedIn</div>
          </div>
          <a href={c.link} target="_blank" rel="noreferrer"
            style={{background:`${c.c}18`,color:c.c,border:`1px solid ${c.c}35`,
              borderRadius:8,padding:"7px 16px",fontSize:12,fontWeight:700,textDecoration:"none"}}>
            ↗ Ver curso</a>
        </div>))}
      <div style={{marginTop:24,background:C.panel,border:`1px solid ${C.border}`,borderRadius:12,
        padding:20,borderTop:`2px solid ${C.g}`}}>
        <div style={{fontWeight:700,fontSize:14,color:C.g,marginBottom:10}}>💡 Portfólio que impressiona</div>
        {["GitHub com projetos públicos e READMEs bem escritos em todos",
          "APIs deployadas no Render com links funcionando",
          "Documentação Postman publicada junto com a API",
          "LinkedIn atualizado com cada certificado Udemy concluído"]
          .map((t,i)=>(
          <div key={i} style={{fontSize:13,color:C.muted,lineHeight:1.8,display:"flex",gap:8}}>
            <span style={{color:C.g}}>→</span>{t}</div>))}
      </div>
    </div>);}

/* ══════════════════════════════════════════════ APP ══ */
export default function App(){
  const [tab,setTab]=useState("home");
  const [done,setDone]=useState(new Set());
  return(
    <div style={{background:C.bg,minHeight:"100vh",fontFamily:"'IBM Plex Mono','Courier New',monospace",color:C.text}}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet"/>
      <style>{`*{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:5px;background:${C.bg}}
        ::-webkit-scrollbar-thumb{background:${C.border};border-radius:3px}
        button,a{transition:all .15s}`}</style>
      <header style={{background:"rgba(4,5,10,.97)",backdropFilter:"blur(16px)",
        borderBottom:`1px solid ${C.border}`,position:"sticky",top:0,zIndex:100,
        display:"flex",alignItems:"center",padding:"0 28px",gap:2,height:50}}>
        <div style={{fontWeight:800,fontSize:14,color:C.g,marginRight:18,letterSpacing:-1}}>
          {"</>"}<span style={{color:C.text,fontSize:11,fontWeight:400,marginLeft:8}}>js.roadmap 🇧🇷</span>
        </div>
        {TABS.map(([id,label])=>(
          <button key={id} onClick={()=>setTab(id)}
            style={{padding:"6px 12px",background:tab===id?`${C.g}10`:"transparent",
              color:tab===id?C.g:C.dim,border:tab===id?`1px solid ${C.g}20`:"1px solid transparent",
              borderRadius:6,cursor:"pointer",fontSize:11,fontFamily:"inherit",fontWeight:700,letterSpacing:.4}}>
            {label}</button>))}
        <div style={{marginLeft:"auto",fontSize:10,color:C.dim}}>
          <span style={{color:C.g,fontWeight:700}}>{done.size}</span>/12 sem
        </div>
      </header>
      {tab==="home"    &&<HomeView    done={done}/>}
      {tab==="cursos"  &&<CoursesView/>}
      {tab==="semanas" &&<WeeksView   done={done} setDone={setDone}/>}
      {tab==="projetos"&&<ProjectsView/>}
      {tab==="certs"   &&<CertsView/>}
      <footer style={{textAlign:"center",padding:"16px",borderTop:`1px solid ${C.border}`,
        color:C.dim,fontSize:10,letterSpacing:1}}>
        🇧🇷 100% ÁUDIO PT-BR · 120H TOTAIS · 12 SEMANAS · 2H/DIA · SEG–SEX
      </footer>
    </div>);}