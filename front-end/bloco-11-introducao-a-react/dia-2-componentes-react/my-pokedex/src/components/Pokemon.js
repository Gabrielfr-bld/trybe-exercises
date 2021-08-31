import React from 'react';
// import PropType from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { pokemon } = this.props;

        return(
           <section className="pokemon">
               <p>{pokemon.name}</p>
               <p>{pokemon.type}</p>
               <p>{`Average weight: ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
               <span>
                <img src={ pokemon.image } alt={`${pokemon.name} sprite`}/>
              </span>  
           </section>  

        );
    }
}

export default Pokemon;