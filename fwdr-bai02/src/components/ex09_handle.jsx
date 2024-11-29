import React from 'react'
import { useState } from 'react';

const Handle = () => {
    //1. Cài đặt state
    const [name, setName] = useState();
    const [org, setOrg] = useState(".org");
    const [edition, setEdition] = useState(null);
    
    //2. Handle sự kiện form submit
    const handleSubmit = (e) => {
        //2.1. Chuẩn bị nội dung thông báo
        let url = [];
        url.push("Your Registered Website:");
        url.push("---------------------------------");
        url.push("Domain Name: " + name);
        url.push("Organization: " + org);
        url.push("--- Completed Wedsite address ---");
        url.push("https://www." + name + org);
        url.push("Edition: " + edition + " Edition");

        //2.2. Thông báo
        alert(url.join("\n"));

    };
    
    //3. Trả về giao diện
    return (
        <>
            <h1>Example 09: Handle</h1>
            <form onSubmit={handleSubmit}>
                {/* fix error for typing inside text field */}
                Disired domain name:
                <input value={name} onChange={(e) => { setName(e.target.value); }} />
                <div>
                    Organization:
                    <input type="radio" value=".org" checked={org === ".org"} onChange={(e) => { setOrg(e.target.value); }} /> .org
                    <input type="radio" value=".com" checked={org === ".com"} onChange={(e) => { setOrg(e.target.value); }} /> .com
                    <input type="radio" value=".net" checked={org === ".net"} onChange={(e) => { setOrg(e.target.value); }} /> .net
                </div>
                <div>
                    <select value={edition} onChange={(e) => { setEdition(e.target.value) }}>
                        <option value="">Choose Edition...</option>
                        <option value="Standard">Standard Edition</option>
                        <option value="Professonal">Professonal Edition</option>
                    </select>
                </div>
                <button>Register</button>
            </form>
            <p />
            <hr align='left' width='50%' />
        </>
    );
}

export default Handle;