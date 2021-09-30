import React from 'react';


export default function Button({ label, ...props }){
    return <button {...props} className="button_default">{label}</button>;
};