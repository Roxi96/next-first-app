import React from 'react';
import Buscar from '../layouts/ui/Buscar'
import Navegacion from './Navegacion'
import Link from 'next/link'

 const Header = () => {
     return ( 
        <header>
            <div>
                <div>
                    <p>P</p>
                    <Buscar/>
                    {/* Nav aqui */}
                    <Navegacion/>
                </div>
                <div>
                    <p>Hola: Roxana</p>
                    <button type='button'>Cerrar Sesion</button>

                    <Link rel="/" href="" >Login</Link>
                    <Link rel="/" href="" >Crear Cuenta</Link>
                </div>
            </div>
        </header>


      );
 }
  
 export default Header;