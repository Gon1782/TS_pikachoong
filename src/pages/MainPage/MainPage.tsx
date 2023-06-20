import { useQuery, useQueryClient } from 'react-query';
import Map from '../../components/Main/Map';
import { getData } from '../../common/api';
import { useEffect, useState } from 'react';
import { Data, Location } from '../../types/MapInterface';
import { useAppSelector } from '../../hooks/useRedux';
import Loader from '../../components/Loader';
import useDidMountEffect from '../../hooks/useDidMountEffect';

interface Props {
  myLocation: Location;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  setLocation: (location: Location) => void;
  setMyLocation: React.Dispatch<
    React.SetStateAction<{
      lat: number | string;
      lng: number | string;
    }>
  >;
}

export const MainPage = ({
  level,
  myLocation,
  setLevel,
  setLocation,
  setMyLocation,
}: Props) => {
  const queryClient = useQueryClient();
  const zc = useAppSelector((state) => state.location.zcode);
  const zsc = useAppSelector((state) => state.location.zscode);
  const [zcode, setZcode] = useState(zc);
  const [zscode, setZscode] = useState(zsc);

  // GET DATA
  const { isLoading, isError, data, error, refetch } = useQuery<
    Data | undefined,
    Error,
    Data,
    [string, string]
  >([zc, zsc], getData);

  // 지역코드나 시군구코드가 바뀌면 refetch
  useDidMountEffect(() => {
    if ((zc && zcode !== zc) || (zsc && zscode !== zsc)) {
      queryClient.removeQueries([zc, zsc]);
      refetch();
      setZcode(zc);
      setZscode(zsc);
    }
  }, [zc, zsc]);

  if (isLoading) return <Loader />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Map
      data={data}
      myLocation={myLocation}
      setLocation={setLocation}
      setMyLocation={setMyLocation}
      level={level}
      setLevel={setLevel}
    />
  );
};
