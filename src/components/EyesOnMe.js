// Code EyesOnMe Component Here
import React from 'react' 

class EyesOnMe extends React.Component {

    render() {
        return(
            <button onBlur={() => console.log('Hey! Eyes on me!')} onFocus={() => console.log('Good!')}>Blur or Focus</button>
        )
    }
}

export default EyesOnMe
