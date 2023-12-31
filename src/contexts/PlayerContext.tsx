/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { Station } from "../services/station";
import { setitem } from "../helpers/localStorage";

interface Props {
	children: React.ReactNode;
}

export const PlayerContext = createContext({
	station: {} as Station | null,
	setStation: (station: Station | null) => {}
});

export function PlayerProvider({ children }: Props) {
	const [station, setStation] = useState<Station | null>(null);

	useEffect(() => {
		if (station)
			setitem('lastStation', station.stationUuid);
	}, [station]);

  return (
    <PlayerContext.Provider value={{ station, setStation }}>
      { children }
    </PlayerContext.Provider>
  );
}
