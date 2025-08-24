import './NavBar.css'
import { useState, useEffect } from 'react'

export function NavBar() {
    const [nav, setNav] = useState('');

    useEffect(() =>{
        console.log('legal, ativou efeito colateral')
    })
    return (
        <nav></nav>
    )
}
export function SubNavBar() {
    return (
        <nav></nav>
    )
}