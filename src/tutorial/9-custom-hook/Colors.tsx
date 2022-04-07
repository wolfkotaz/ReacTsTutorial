/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import useAxiosGet from "./useAxiosGet";

const url = "https://random-data-api.com/api/color/random_color";

interface IColor {
  uid: string;
  hex_value: string;
}

interface IColorParam {
  size: number;
}

const Colors = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, error, colors, setColors, getColors] = useAxiosGet<
    IColorParam,
    IColor[]
  >({
    url: url,
    params: {
      size: 10,
    },
  });

  useEffect(() => {
    getColors();
  }, []);

  if (isLoading || !colors) {
    return <h2>Loading...</h2>;
  }

  if (error.status.isError) {
    return (
      <>
        <h2>{error.status.code}</h2>
        <h2>{error.message}</h2>
      </>
    );
  }

  return (
    <div className="colors">
      {colors.map((color) => {
        const { uid, hex_value } = color;

        return (
          <div
            className="color-item"
            key={uid}
            style={{ backgroundColor: hex_value }}
          >
            {hex_value}
          </div>
        );
      })}

      <button className="btn" onClick={() => getColors()}>
        Change colors
      </button>
    </div>
  );
};

export default Colors;
