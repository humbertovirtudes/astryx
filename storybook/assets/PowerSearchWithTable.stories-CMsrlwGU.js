import{ah as d,a1 as r}from"./iframe-CvQtpGNA.js";import{P as u}from"./PowerSearch-CR9muYHc.js";import{u as m}from"./usePowerSearchConfig-D1U-iUdY.js";import{T as h,f as c,p}from"./Table-BJTkz749.js";import"./preload-helper-Ct5FWWRu.js";import"./Tokenizer-B-fTIRex.js";import"./BaseTypeahead-CYzOT43z.js";import"./usePopover-DFrrXvSx.js";import"./TypeaheadItem-7xhOAn70.js";import"./getKey-DyRdrWhf.js";import"./Field-dHX8CaNz.js";import"./FieldStatus-BCDx5Qb2.js";import"./inputStyles.stylex-Bpqcd25J.js";import"./InputClearButton-Dbvlhw4o.js";import"./Token-DwjE31tc.js";import"./useInteractiveRole-Dov4Bx53.js";import"./OverflowList-BSTapA1F.js";import"./Avatar-Ol4hGR4U.js";import"./Selector-DK_9XDOF.js";import"./Divider-ByuXeXS2.js";import"./utils-_uNaBhDK.js";import"./hooks-DOMKSogA.js";import"./Item-CzeaPCIo.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./TreeList-CB2KokDK.js";import"./TextInput-DERVqCk7.js";import"./groupStyles-kI3c38jU.js";import"./useInputContainer-B0lQ4nPk.js";import"./useClickableContainer-DcKJIdDJ.js";import"./NumberInput-Cw7GaNw8.js";import"./DateInput-DMDcAEnK.js";import"./Calendar-E7pFdaMG.js";import"./plainDate-C-ANv9VG.js";import"./dateParser-CpYVMWHj.js";import"./TimeInput-DbFP1pCg.js";import"./timeParser-CAi7zy_b.js";import"./Typeahead-CgpK8tEq.js";import"./VStack-DI0hHh4Q.js";import"./Stack-Bj4rSGpP.js";import"./stack.stylex-BlarxY2N.js";import"./HStack-Cpp-n7c9.js";import"./EmptyState-DoyTMi0b.js";const y=[{value:"fiction",label:"Fiction"},{value:"non-fiction",label:"Non-Fiction"},{value:"sci-fi",label:"Science Fiction"},{value:"fantasy",label:"Fantasy"},{value:"mystery",label:"Mystery"},{value:"romance",label:"Romance"},{value:"biography",label:"Biography"},{value:"history",label:"History"}],f=[{key:"title",type:"string",label:"Title"},{key:"author",type:"string",label:"Author"},{key:"year",type:"number",label:"Publication Year"},{key:"genre",type:"enum",label:"Genre",enumValues:y}],g=[{id:"1",title:"Dune",author:"Frank Herbert",year:1965,genre:"sci-fi"},{id:"2",title:"Pride and Prejudice",author:"Jane Austen",year:1813,genre:"romance"},{id:"3",title:"The Great Gatsby",author:"F. Scott Fitzgerald",year:1925,genre:"fiction"},{id:"4",title:"1984",author:"George Orwell",year:1949,genre:"sci-fi"},{id:"5",title:"To Kill a Mockingbird",author:"Harper Lee",year:1960,genre:"fiction"},{id:"6",title:"The Hobbit",author:"J.R.R. Tolkien",year:1937,genre:"fantasy"},{id:"7",title:"Sapiens",author:"Yuval Noah Harari",year:2011,genre:"non-fiction"},{id:"8",title:"The Name of the Wind",author:"Patrick Rothfuss",year:2007,genre:"fantasy"},{id:"9",title:"Gone Girl",author:"Gillian Flynn",year:2012,genre:"mystery"},{id:"10",title:"Steve Jobs",author:"Walter Isaacson",year:2011,genre:"biography"},{id:"11",title:"A Brief History of Time",author:"Stephen Hawking",year:1988,genre:"non-fiction"},{id:"12",title:"The Shining",author:"Stephen King",year:1977,genre:"mystery"},{id:"13",title:"The Handmaid's Tale",author:"Margaret Atwood",year:1985,genre:"sci-fi"},{id:"14",title:"Outlander",author:"Diana Gabaldon",year:1991,genre:"romance"},{id:"15",title:"The Guns of August",author:"Barbara Tuchman",year:1962,genre:"history"}],b=[{key:"title",header:"Title",width:c(2)},{key:"author",header:"Author",width:c(2)},{key:"year",header:"Year",width:p(100)},{key:"genre",header:"Genre",width:p(140),renderCell:e=>y.find(t=>t.value===e.genre)?.label??e.genre}],se={title:"Core/PowerSearchWithTable",tags:["autodocs"],decorators:[e=>r.jsx("div",{style:{width:800},children:r.jsx(e,{})})]},o={render:()=>{const[e,t]=d.useState([]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books by title, author, year, genre...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0})]})}},a={render:()=>{const[e,t]=d.useState([{field:"genre",operator:"is",value:{type:"enum",value:"sci-fi"}}]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0,isStriped:!0})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books by title, author, year, genre..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([{
      field: 'genre',
      operator: 'is',
      value: {
        type: 'enum',
        value: 'sci-fi'
      }
    }]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover isStriped />
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const ne=["Default","WithPresetFilters"];export{o as Default,a as WithPresetFilters,ne as __namedExportsOrder,se as default};
