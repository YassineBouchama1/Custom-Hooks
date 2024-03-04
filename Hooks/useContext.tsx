import react ,{createContext,userState} from "react";


type GlobalContextProvider = {
    children:React.ReactNode;
}
type Theme = 'dark'| 'light'
type GlobalContext = {
    theme:Theme,
    setTheme:React.Dispatch<react.SetStateAction<Theme>>
}

export const GlobalContext = createContext<GlobalContext | null>(null);
export default function  GlobalContextProvider ({children}:GlobalContextProvider){
    const [theme,setTheme] = useState<Theme>('light')

    return(
        <GlobalContext.Provider
        value=({theme,setTheme})>
        {children}
        </GlobalContext>
    )
}


export function useGlobalContext (){
    const context = useContext(GlobalContext)
    if(!context){
        throw new Error(
            'useGlobalContext ,ust be used within a GlobalContextProvider'
        )
        return context
    }
}

//useage
const {theme,setTheme} = useGlobalContext()