import{ah as d,a1 as r}from"./iframe-CFQZsZqW.js";import{P as u}from"./PowerSearch-CKNXVxj_.js";import{u as m}from"./usePowerSearchConfig-C4MRvA1G.js";import{T as h,f as c,p}from"./Table-Cu9XGjY4.js";import"./preload-helper-Ct5FWWRu.js";import"./Tokenizer-BH8qgPDd.js";import"./BaseTypeahead-CrndUC77.js";import"./usePopover-wleg_bp_.js";import"./TypeaheadItem-D7bNtLGJ.js";import"./getKey-DyRdrWhf.js";import"./Field-BG8McEN6.js";import"./FieldStatus-BN9xFExm.js";import"./inputStyles.stylex-Bpqcd25J.js";import"./InputClearButton-BeUFdbnv.js";import"./Token-clwRkW29.js";import"./useInteractiveRole-BTnL2LIn.js";import"./OverflowList-DQ7KcYQH.js";import"./Avatar-duXoBxMQ.js";import"./Selector-CVuF6nuc.js";import"./Divider-DeSKiaXK.js";import"./utils-_uNaBhDK.js";import"./hooks-CmSgaHGp.js";import"./Item-DchnVN-X.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./TreeList-CP-tAZTy.js";import"./TextInput-B-Rt8Q5R.js";import"./groupStyles-BJ3x17e6.js";import"./useInputContainer-CUFW93cj.js";import"./useClickableContainer-CFQUAvDn.js";import"./NumberInput-CqPW6pLH.js";import"./DateInput-Cl9yB4Rq.js";import"./Calendar-BNeJJi2A.js";import"./plainDate-C-ANv9VG.js";import"./dateParser-CpYVMWHj.js";import"./TimeInput-D8Q7Truc.js";import"./timeParser-CAi7zy_b.js";import"./Typeahead-phXs0ITw.js";import"./VStack-DnocyeQd.js";import"./Stack-CASS_BYm.js";import"./stack.stylex-BlarxY2N.js";import"./HStack-BZmX7J1E.js";import"./EmptyState-BVt6G0JK.js";const y=[{value:"fiction",label:"Fiction"},{value:"non-fiction",label:"Non-Fiction"},{value:"sci-fi",label:"Science Fiction"},{value:"fantasy",label:"Fantasy"},{value:"mystery",label:"Mystery"},{value:"romance",label:"Romance"},{value:"biography",label:"Biography"},{value:"history",label:"History"}],f=[{key:"title",type:"string",label:"Title"},{key:"author",type:"string",label:"Author"},{key:"year",type:"number",label:"Publication Year"},{key:"genre",type:"enum",label:"Genre",enumValues:y}],g=[{id:"1",title:"Dune",author:"Frank Herbert",year:1965,genre:"sci-fi"},{id:"2",title:"Pride and Prejudice",author:"Jane Austen",year:1813,genre:"romance"},{id:"3",title:"The Great Gatsby",author:"F. Scott Fitzgerald",year:1925,genre:"fiction"},{id:"4",title:"1984",author:"George Orwell",year:1949,genre:"sci-fi"},{id:"5",title:"To Kill a Mockingbird",author:"Harper Lee",year:1960,genre:"fiction"},{id:"6",title:"The Hobbit",author:"J.R.R. Tolkien",year:1937,genre:"fantasy"},{id:"7",title:"Sapiens",author:"Yuval Noah Harari",year:2011,genre:"non-fiction"},{id:"8",title:"The Name of the Wind",author:"Patrick Rothfuss",year:2007,genre:"fantasy"},{id:"9",title:"Gone Girl",author:"Gillian Flynn",year:2012,genre:"mystery"},{id:"10",title:"Steve Jobs",author:"Walter Isaacson",year:2011,genre:"biography"},{id:"11",title:"A Brief History of Time",author:"Stephen Hawking",year:1988,genre:"non-fiction"},{id:"12",title:"The Shining",author:"Stephen King",year:1977,genre:"mystery"},{id:"13",title:"The Handmaid's Tale",author:"Margaret Atwood",year:1985,genre:"sci-fi"},{id:"14",title:"Outlander",author:"Diana Gabaldon",year:1991,genre:"romance"},{id:"15",title:"The Guns of August",author:"Barbara Tuchman",year:1962,genre:"history"}],b=[{key:"title",header:"Title",width:c(2)},{key:"author",header:"Author",width:c(2)},{key:"year",header:"Year",width:p(100)},{key:"genre",header:"Genre",width:p(140),renderCell:e=>y.find(t=>t.value===e.genre)?.label??e.genre}],se={title:"Core/PowerSearchWithTable",tags:["autodocs"],decorators:[e=>r.jsx("div",{style:{width:800},children:r.jsx(e,{})})]},o={render:()=>{const[e,t]=d.useState([]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books by title, author, year, genre...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0})]})}},a={render:()=>{const[e,t]=d.useState([{field:"genre",operator:"is",value:{type:"enum",value:"sci-fi"}}]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0,isStriped:!0})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
