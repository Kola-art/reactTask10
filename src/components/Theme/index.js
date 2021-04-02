import React from 'react';
import css from './theme.module.css';
export const themes = {
    light: {
        background: 'red',
    },
    dark : {
        background: 'green',
    }
};

export const ThemeContext = React.createContext (
    themes.dark
);

class ThemedButton extends React.Component {
    render(){
        let props = this.props;
        let theme = this.context;
        return(
            <body className = {css.body} style={{backgroundColor: theme.background}}>
            < button { ...props } className = {css.btn} />
            </body>
        );
    }
}

ThemedButton.contextType = ThemeContext;

function Toolbar(props){
    return(
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    )
}

export class Thema extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            theme: themes.light,
        }
        this.toogleTheme = this.toogleTheme.bind(this);
    }

   toogleTheme = () =>{
        this.setState(state =>({
            theme:
            state.theme === themes.dark 
            ? themes.light : themes.dark,
        }));
    }
    render (){
        return(
            <div>
            <ThemeContext.Provider value={this.state.theme} >
            <Toolbar changeTheme={this.toogleTheme} />
            </ThemeContext.Provider>
            </div>
        )
    }
}
