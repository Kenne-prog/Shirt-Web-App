import React from 'react';

import { useSnapshot } from 'valtio';

import { lakers, blazers, bucks, bulls, cavs, celtics, grizzlies, clippers, hawks, heat, horntets, jazz, kings, magic, knicks, spurs, mavs, nbalogo, nets, nuggets, pacers, pels, pistons, raptors, rockets, sixers, suns, thunder, timbs, warriors, wizards } from '../assets'

import state from '../store'

const LogoSelection = ({ onSelectLogo, onClose }) => {
  const snap = useSnapshot(state);
  // Sample data for 30 logo options
  const logoOptions = [
    { imageUrl: sixers },
    { imageUrl: blazers },
    { imageUrl: bucks },
    { imageUrl: bulls },
    { imageUrl: cavs },
    { imageUrl: celtics },
    { imageUrl: clippers },
    { imageUrl: grizzlies },
    { imageUrl: hawks },
    { imageUrl: heat },
    { imageUrl: horntets },
    { imageUrl: jazz },
    { imageUrl: magic },
    { imageUrl: mavs },
    { imageUrl: nets},
    { imageUrl: nuggets },
    { imageUrl: pacers },
    { imageUrl: pels },
    { imageUrl: pistons },
    { imageUrl: raptors },
    { imageUrl: rockets },
    { imageUrl: spurs },
    { imageUrl: suns },
    { imageUrl: thunder },
    { imageUrl: timbs },
    { imageUrl: warriors },
    { imageUrl: wizards },
    { imageUrl: kings },
    { imageUrl: knicks },
    { imageUrl: lakers },
  ];

  const rows = [];
  for (let i = 0; i < 10; i++) {
    const row = logoOptions.slice(i * 3, i * 3 + 3);
    rows.push(row);
  }

  return (
    <div className="absolute left-full ml-3" style={{ overflow: 'auto', height: '300px', width: '300px' }}>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px' }}>
            {logoOptions.map((logo, index) => (
                <li key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                        src={logo.imageUrl}
                        alt={`Logo ${index}`}
                        style={{ width: '100px', height: '100px' }}
                    />
                    <button onClick={() => {
                        state.fullDecal = logo.imageUrl // Call the onSelectLogo function to select the logo.
                        state.logoDecal = logo.imageUrl
                        state.selectedLogo = logo.imageUrl
                        onClose(); // Close the logo selection component after selecting a logo.
                    }}>
                        Select
                    </button>
                </li>
            ))}
        </ul>
    </div>
  );
};





export default LogoSelection;