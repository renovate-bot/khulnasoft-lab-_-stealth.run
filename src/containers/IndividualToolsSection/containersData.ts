interface ContainerData {
  title: string;
  command: string;
}

export const containersData: ContainerData[] = [
  {
    title: "stealthos/nmap",
    command: "docker run --rm -ti stealthos/nmap options",
  },
  {
    title: "stealthos/metasploit",
    command:
      "docker run --rm -ti --network host -v $PWD/msf:/root/ stealthos/metasploit",
  },
  {
    title: "stealthos/set",
    command:
      "docker run --rm -ti --network host -v $PWD/set:/root/.set stealthos/set",
  },
  {
    title: "stealthos/beef",
    command:
      "docker run --rm --network host -ti -v $PWD/beef:/var/lib/beef-xss stealthos/beef",
  },
  {
    title: "stealthos/bettercap",
    command: "docker run --rm -ti --network host stealthos/bettercap",
  },
  {
    title: "stealthos/sqlmap",
    command: "docker run --rm -ti stealthos/sqlmap options",
  },
];
