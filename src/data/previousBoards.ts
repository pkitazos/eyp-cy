const previousBoards: Record<yearString, boardPosition[]> = {
  year_2007: [
    { position: "President", name: "Effie Mantrali" },
    { position: "Vice-President", name: "Nassos Stylianou" },
    { position: "Treasurer", name: "Alex Chaillou" },
    { position: "Member", name: "Valentina Mina" },
    { position: "National Coordinator", name: "Robert Volzer" },
  ],
  year_2008: [
    { position: "President", name: "Nassos Stylianou" },
    { position: "Vice-President", name: "Valentina Mina" },
    { position: "Treasurer", name: "Effie Mantrali" },
    { position: "Secretary", name: "Rosie Americanou" },
    { position: "Member", name: "Valando Tryfonos" },
    { position: "National Coordinator", name: "Robert Volzer" },
  ],
  year_2009: [
    { position: "President", name: "Valentina Mina" },
    { position: "Vice-President", name: "Rosia Anericanou" },
    { position: "Treasurer", name: "Effie Mantrali" },
    { position: "Secretary", name: "Fotini Nicolaou" },
    { position: "Member", name: "Christos Alexandrou" },
    { position: "National Coordinator", name: "Nassos Stylianou" },
  ],
  year_2010: [
    { position: "President", name: "Valentina Mina" },
    { position: "Vice-President", name: "Fotini Nicolaou" },
    { position: "Treasurer", name: "Christos Alexandrou" },
    { position: "Secretary", name: "Maria Iordanou" },
    { position: "Fundraising and Sponsorship Officer", name: "Theo Demetriou" },
    {
      position: "Internal Communications Officer",
      name: "Christiana Themistocleous",
    },
    { position: "National Coordinator", name: "Nassos Stylianou" },
  ],
  year_2011: [
    { position: "President", name: "Maria Iordanou" },
    { position: "Vice-President", name: "Panayiotis Ataou" },
    { position: "Treasurer", name: "Christiana Themistocleous" },
    { position: "Secretary", name: "Maria Pashi" },
    {
      position: "Fundraising and Sponsorship Officer",
      name: "Lefteris Marangos",
    },
    { position: "Public Relations Officer", name: "Mikaela Kantor" },
    { position: "National Coordinator", name: "Nassos Stylianou" },
    { position: "National Coordinator", name: "Valentina Mina" },
  ],
  year_2012: [
    { position: "President", name: "Maria Iordanou" },
    { position: "Vice-President", name: "Lefteris Marangos" },
    { position: "Treasurer", name: "Panayiotis Ataou" },
    { position: "Secretary", name: "Ioanna Yiallourides" },
    { position: "Membership and Communications Officer", name: "Maria Pashi" },
    { position: "Public Relations Officer", name: "Mikaela Kantor" },
    { position: "National Coordinator", name: "Valentina Mina" },
  ],
  year_2013: [
    { position: "President", name: "Mikaela Kantor" },
    { position: "Vice-President", name: "Panayiotis Ataou" },
    { position: "Treasurer", name: "Ioanna Yiallourides" },
    { position: "Secretary", name: "Aaron Miles" },
    { position: "Alumni Officer", name: "Maya Athanatou" },
    { position: "Public Relations Officer", name: "Arriana Yiallourides" },
    { position: "National Coordinator", name: "Maria Pashi" },
  ],
  year_2014: [
    { position: "President", name: "Mikaela Kantor" },
    { position: "Vice-President", name: "Panayiotis Ataou" },
    { position: "Treasurer", name: "Ioanna Yiallourides" },
    { position: "Secretary", name: "Helena Pieridou" },
    { position: "Alumni Officer", name: "Solonas Karoullas" },
    { position: "Public Relations Officer", name: "Arriana Yiallourides" },
    { position: "National Coordinator", name: "Maria Pashi" },
  ],
  year_2015: [
    { position: "President", name: "Mikaela Kantor" },
    { position: "Vice-President", name: "Ioanna Yiallourides" },
    { position: "Treasurer", name: "Elena Odysseos" },
    { position: "Secretary", name: "Solonas Karoullas" },
    { position: "Human Resources", name: "Yiannos Vakis" },
    { position: "Project Manager", name: "Arriana Yiallourides" },
    { position: "National Coordinator", name: "Maria Iordanou" },
    { position: "National Coordinator", name: "Helena Pierides" },
  ],
  year_2016: [
    { position: "President", name: "Elena Odysseos" },
    { position: "Vice-President", name: "Margarita Samouridou" },
    { position: "Treasurer", name: "Orestis Collins" },
    { position: "Secretary", name: "Agni Papageorgiou" },
    { position: "Members & Alumni Officer", name: "Pavlos Petrallis" },
    { position: "Communications Officer", name: "Mike Dalmiras" },
    { position: "National Coordinator", name: "Mikaela Kantor" },
    { position: "National Coordinator", name: "Helena Pierides" },
  ],
  year_2017: [
    { position: "President", name: "Elena Odysseos" },
    { position: "Vice-President", name: "Orestis Collins" },
    { position: "Treasurer", name: "Stefanos Marangos" },
    { position: "Secretary", name: "Elena Pertidou" },
    { position: "Members & Alumni Officer", name: "Andreas Nicolaou" },
    { position: "Public Relations Officer", name: "Agni Papageorgiou" },
    { position: "National Coordinator", name: "Margarita Samouridou" },
  ],
  year_2018: [
    { position: "President", name: "Stefanos Marangos" },
    { position: "Vice-President", name: "Agni Papageorgiou" },
    { position: "Treasurer", name: "Aimilios Charalambous" },
    { position: "Secretary", name: "Rafaealla Chrysostomou" },
    { position: "Members & Alumni Officer", name: "Alexandros Kaimakliotis" },
    {
      position: "Public Relations Officer and Fundraising Officer",
      name: "Elena Petridou",
    },
    { position: "National Coordinator", name: "Margarita Samouridou" },
    { position: "National Coordinator", name: "Elena Odysseos" },
  ],
  year_2019: [
    { position: "President", name: "Elena Petridou" },
    { position: "Vice-President", name: "Rafaealla Chrysostomou" },
    { position: "Treasurer", name: "Aimilios Charalambous" },
    { position: "Secretary", name: "Stephanie Tanou" },
    { position: "Members & Alumni Officer", name: "Xenia Constantinou" },
    { position: "Public Relations Officer", name: "Christina Tanou" },
    { position: "National Coordinator", name: "Elena Odysseos" },
    { position: "National Coordinator", name: "Agni Papageorgiou" },
  ],
  year_2020: [
    { position: "President", name: "Emilios Charalambous" },
    { position: "Vice-President", name: "Stephanie Tanou" },
    { position: "Treasurer", name: "Theodoulos Hadjimatheou" },
    { position: "Secretary", name: "Stylianos Hadjiforados" },
    { position: "Members & Alumni Officer", name: "Emily Tsaggaride" },
    { position: "Public Relations Officer", name: "Maria Tanou" },
    { position: "National Coordinator", name: "Elena Petridou" },
    { position: "National Coordinator", name: "Christina Tanou" },
  ],
  year_2021: [
    { position: "President", name: "Theodoulos Hadjimatheou" },
    { position: "Vice-President", name: "Emily Tsaggaride" },
    { position: "Treasurer", name: "Stefan Stankovic" },
    { position: "Secretary", name: "Lazaros Hadjiforados" },
    {
      position: "Marketing & Communications Officer",
      name: "Stylianos Hadjiforados",
    },
    { position: "Public Relations Officer", name: "Athina Stavrou" },
    { position: "National Coordinator", name: "Maria Tanou" },
    { position: "National Coordinator", name: "Emilios Charlambous" },
  ],
  year_2022: [
    { position: "President", name: "Athina Stavrou" },
    { position: "Vice-President", name: "Stefan Stankovic" },
    { position: "Treasurer", name: "Constantinos Charalambous" },
    { position: "Secretary", name: "Lazaros Hadjiforados" },
    { position: "HR Officer", name: "Stylianos Hadjiforados" },
    { position: "Public Relations Officer", name: "Kornelia Kitazou" },
    { position: "National Coordinator", name: "Maria Tanou" },
    { position: "National Coordinator", name: "Theodoulos Hadjimatheou" },
  ],
};

export default previousBoards;