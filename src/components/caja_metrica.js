
import React from 'react';

function Caja_metrica(props) {
    return (

        <div>
            <div class={props.clase1}>
                <div class={props.clase2}>
                    <div class={props.clase3}>
                        <div class={props.clase4}>
                            <div class={props.clase5}>
                                <div class={props.clase6}> {props.titulo} </div>
                                <div class={props.clase7}>{props.valor}</div>
                            </div>

                            <div class={props.clase8}>
                                <i class={props.icono}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Caja_metrica;

