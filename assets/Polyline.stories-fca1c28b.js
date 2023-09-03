import{j as s}from"./jsx-runtime-670450c2.js";import{r as n}from"./index-f1f749bf.js";import{b as O,M as I,C as M}from"./Map-30e53352.js";import"./Marker-459755a9.js";import"./Annotation-d9f4e275.js";import"./Polygon-e5684106.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";function d({points:i,visible:u=!0,enabled:f=!0,selected:h=!1,onSelect:y=void 0,onDeselect:g=void 0,lineCap:v="round",lineDash:k=[],lineDashOffset:b=0,lineJoin:j="round",lineWidth:E=1,strokeColor:C="rgb(0, 122, 255)",strokeOpacity:D=1,strokeStart:w=0,strokeEnd:V=1}){const[e,q]=n.useState(null),o=n.useContext(O);return n.useEffect(()=>{if(o===null)return;const t=new mapkit.PolylineOverlay([]);return o.addOverlay(t),q(t),()=>{o.removeOverlay(t)}},[o]),n.useEffect(()=>{e!==null&&(e.points=i.map(({latitude:t,longitude:l})=>new mapkit.Coordinate(t,l)))},[e,i]),Object.entries({visible:u,enabled:f,selected:h}).forEach(([t,l])=>{n.useEffect(()=>{e&&(e[t]=l)},[e,l])}),Object.entries({lineCap:v,lineDash:k,lineDashOffset:b,lineJoin:j,lineWidth:E,strokeColor:C,strokeOpacity:D,strokeStart:w,strokeEnd:V}).forEach(([t,l])=>{n.useEffect(()=>{e&&(e.style[t]=l)},[e,l])}),[{name:"select",handler:y},{name:"deselect",handler:g}].forEach(({name:t,handler:l})=>{n.useEffect(()=>{if(!e||!l)return;const r=()=>l();return e.addEventListener(t,r),()=>e.removeEventListener(t,r)},[e,l])}),null}try{d.displayName="Polyline",d.__docgenInfo={description:"",displayName:"Polyline",props:{points:{defaultValue:null,description:`An array of coordinate points that define the polyline overlay’s shape.
@see {@link https://developer.apple.com/documentation/mapkitjs/polylineoverlay/2974014-points}`,name:"points",required:!0,type:{name:"Coordinate[]"}},visible:{defaultValue:{value:"true"},description:`A Boolean value that determines whether the polyline is visible.
@see {@link https://developer.apple.com/documentation/mapkitjs/overlay/2974002-visible}`,name:"visible",required:!1,type:{name:"boolean"}},enabled:{defaultValue:{value:"true"},description:`A Boolean value that determines whether the polyline responds to user interaction.
@see {@link https://developer.apple.com/documentation/mapkitjs/overlay/2973997-enabled}`,name:"enabled",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:`A Boolean value that determines whether the map displays the polyline in a selected state.
@see {@link https://developer.apple.com/documentation/mapkitjs/overlay/2974000-selected}`,name:"selected",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:{value:"undefined"},description:"Event fired when the polyline is selected.",name:"onSelect",required:!1,type:{name:"(() => void)"}},onDeselect:{defaultValue:{value:"undefined"},description:"Event fired when the polyline is deselected.",name:"onDeselect",required:!1,type:{name:"(() => void)"}},lineCap:{defaultValue:{value:"round"},description:`The style to use when drawing line endings.
@see {@link https://developer.apple.com/documentation/mapkitjs/style/2974024-linecap}`,name:"lineCap",required:!1,type:{name:"enum",value:[{value:'"butt"'},{value:'"round"'},{value:'"square"'}]}},lineDash:{defaultValue:{value:"[]"},description:`An array of line and gap lengths for creating a dashed line.
@see {@link https://developer.apple.com/documentation/mapkitjs/style/2974025-linedash}`,name:"lineDash",required:!1,type:{name:"number[]"}},lineDashOffset:{defaultValue:{value:"0"},description:`The number of CSS pixels to use as an offset when drawing a line’s dash pattern.
@see {@link https://developer.apple.com/documentation/mapkitjs/style/2974026-linedashoffset}`,name:"lineDashOffset",required:!1,type:{name:"number"}},lineJoin:{defaultValue:{value:"round"},description:`The corner style to apply when joining line segments.
@see {@link https://developer.apple.com/documentation/mapkitjs/style/2974027-linejoin}`,name:"lineJoin",required:!1,type:{name:"enum",value:[{value:'"round"'},{value:'"miter"'},{value:'"bevel"'}]}},lineWidth:{defaultValue:{value:"1"},description:`The width of a line’s stroke, in CSS pixels.
@see {@link https://developer.apple.com/documentation/mapkitjs/style/2974028-linewidth}`,name:"lineWidth",required:!1,type:{name:"number"}},strokeColor:{defaultValue:{value:"rgb(0, 122, 255)"},description:`The stroke color of a line.
@see {@link https://developer.apple.com/documentation/mapkitjs/style/2974030-strokecolor}`,name:"strokeColor",required:!1,type:{name:"string"}},strokeOpacity:{defaultValue:{value:"1"},description:`The opacity of the stroke color.
@see {@link https://developer.apple.com/documentation/mapkitjs/style/2974031-strokeopacity}`,name:"strokeOpacity",required:!1,type:{name:"number"}},strokeStart:{defaultValue:{value:"0"},description:`The unit distance along the line where a stroke begins.
@see {@link https://developer.apple.com/documentation/mapkitjs/style/3586011-strokestart}`,name:"strokeStart",required:!1,type:{name:"number"}},strokeEnd:{defaultValue:{value:"1"},description:`The unit distance along the line where a stroke ends.
@see {@link https://developer.apple.com/documentation/mapkitjs/style/3586010-strokeend}`,name:"strokeEnd",required:!1,type:{name:"number"}}}}}catch{}const x="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEzNE1EVFdEM1EifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNjcyNDk3MTU1LCJleHAiOjE3MDM5ODA4MDAsIm9yaWdpbiI6Imh0dHBzOi8vbmljb2xhcHBzLmdpdGh1Yi5pbyJ9.Llf8X3q3ZfEdgxMBjlkkwiAnbHHevpOhBTWBUkuow5nQ2xvcWQDV6i59KiPa5YsfEvof9bQ3Y0Q3xCBD5Ky3XQ",H={title:"Components/Polyline",component:d,parameters:{layout:"fullscreen"}},S=i=>{const u=n.useMemo(()=>({centerLatitude:46.52,centerLongitude:6.57,latitudeDelta:.07,longitudeDelta:.03}),[]);return s(I,{token:x,initialRegion:u,colorScheme:M.Dark,children:s(d,{...i})})},a=S.bind({});a.args={lineWidth:5,lineDash:[15,5],lineCap:"butt",strokeColor:"#ffcc02",points:[{longitude:6.51871,latitude:46.51821},{longitude:6.52363,latitude:46.51768},{longitude:6.52502,latitude:46.51755},{longitude:6.52518,latitude:46.51749},{longitude:6.52996,latitude:46.51664},{longitude:6.53456,latitude:46.51569},{longitude:6.53542,latitude:46.51545},{longitude:6.53697,latitude:46.51509},{longitude:6.53955,latitude:46.51428},{longitude:6.53972,latitude:46.51427},{longitude:6.54241,latitude:46.51354},{longitude:6.54498,latitude:46.5133},{longitude:6.5457,latitude:46.51331},{longitude:6.54876,latitude:46.51371},{longitude:6.55429,latitude:46.51383},{longitude:6.5576,latitude:46.51401},{longitude:6.56135,latitude:46.5155},{longitude:6.56553,latitude:46.51701},{longitude:6.56617,latitude:46.51706},{longitude:6.56987,latitude:46.51739},{longitude:6.57218,latitude:46.518},{longitude:6.57291,latitude:46.51824},{longitude:6.5776,latitude:46.51958},{longitude:6.58353,latitude:46.52068},{longitude:6.58515,latitude:46.52113},{longitude:6.59009,latitude:46.52296},{longitude:6.59488,latitude:46.52273},{longitude:6.59814,latitude:46.52078},{longitude:6.60067,latitude:46.51869},{longitude:6.60255,latitude:46.51781},{longitude:6.60289,latitude:46.51752},{longitude:6.60262,latitude:46.51694},{longitude:6.60341,latitude:46.51644},{longitude:6.60626,latitude:46.51603},{longitude:6.61103,latitude:46.51458},{longitude:6.61136,latitude:46.51435},{longitude:6.61177,latitude:46.51408},{longitude:6.61312,latitude:46.51317},{longitude:6.61685,latitude:46.51182},{longitude:6.61708,latitude:46.51165},{longitude:6.62164,latitude:46.50887},{longitude:6.62643,latitude:46.50693}]};var p,c,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 46.52,
    centerLongitude: 6.57,
    latitudeDelta: 0.07,
    longitudeDelta: 0.03
  }), []);
  return <Map token={token} initialRegion={initialRegion} colorScheme={ColorScheme.Dark}>
      <Polyline {...args} />
    </Map>;
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const z=["Default"];export{a as Default,z as __namedExportsOrder,H as default};
//# sourceMappingURL=Polyline.stories-fca1c28b.js.map
