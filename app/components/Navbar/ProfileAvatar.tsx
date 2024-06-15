"use client";

import { useState } from "react";

export default function ProfileAvatar() {
    // remove once login is completed
    const [name] = useState<string>("David Lee");

    //TODO Get the current logged in user and add their initials as a avatar
    var splitName = name.split(" ");
    var first = splitName[0].charAt(0);
    var last = splitName[1].charAt(0);

    return (
        <div>
            {first + last}
        </div>
    );
}
