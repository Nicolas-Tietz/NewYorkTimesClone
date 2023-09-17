
import SecondaryNewsTemplates from "./SecondaryNewsTemplates";
import MainNewsTemplates from "./MainNewsTemplates";
import SideNewsTemplates from "./SideNewsTemplates";
export default function NewsTemplate(props) {
  
  switch (props.newsType) {
    case "main":
      
      return (<MainNewsTemplates windowSize={props.windowSize} newsArray={props.newsArray}/>)
        
      
    case "well":
    case "science":
    case "sports":
      return (<SecondaryNewsTemplates newsArray={props.newsArray} newsType={props.newsType} windowSize={props.windowSize}/>)
      
    case "opinion":
    case "realestate":
      return (<SideNewsTemplates newsArray={props.newsArray} newsType={props.newsType} windowSize={props.windowSize} position={props.position}/>)


  }
}
