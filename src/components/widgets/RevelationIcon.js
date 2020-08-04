import React from 'react';

///The Component for return Specific icon for components need...
const RevelationIcon = ({ placeName, iconSize }) => (

    placeName === "makkah" ?
        <div>
            <img
                src="/quraan-icons/makkah.png"
                alt="makkah"
                width={iconSize}
                height={iconSize}
            />
        </div>
        :
        <div>
            <img
                src="/quraan-icons/madina.png"
                alt="madina"
                width={iconSize}
                height={iconSize}
            />
        </div>
)

export default RevelationIcon;