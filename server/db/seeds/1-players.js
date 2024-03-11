/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('players').del()
  await knex('players').insert([
    {
      id: 1,
      full_name: 'Lionel Messi',
      display_name: 'Messi',
      position: 'Forward',
      country: 'Argentina',
      team: 'Inter Miami',
      value: 8.5,
      att_rating: 9,
      def_rating: 2,
      image:
        'https://img.a.transfermarkt.technology/portrait/big/28003-1694590254.jpg?lm=1',
    },
    {
      id: 2,
      full_name: 'Cristiano Ronaldo',
      display_name: 'Ronaldo',
      position: 'Forward',
      country: 'Portugal',
      team: 'Al-Nassr',
      value: 7.5,
      att_rating: 8,
      def_rating: 2.5,
      image:
        'https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1',
    },
    {
      id: 3,
      full_name: 'Harry Kane',
      display_name: 'Kane',
      position: 'Forward',
      country: 'England',
      team: 'Bayern Munich',
      value: 9,
      att_rating: 9.5,
      def_rating: 4,
      image:
        'https://img.a.transfermarkt.technology/portrait/big/132098-1700211169.jpg?lm=1',
    },
    {
      id: 4,
      full_name: 'Jude Bellingham',
      display_name: 'Bellingham',
      position: 'Midfielder',
      country: 'England',
      team: 'Real Madrid',
      value: 8.5,
      att_rating: 8,
      def_rating: 8,
      image:
        'https://img.a.transfermarkt.technology/portrait/header/581678-1693987944.jpg?lm=1',
    },
    {
      id: 5,
      full_name: 'Thibaut Courtois',
      display_name: 'Courtois',
      position: 'Goalkeeper',
      country: 'Belgium',
      team: 'Real Madrid',
      value: 7.5,
      att_rating: 1,
      def_rating: 9,
      image:
        'https://img.a.transfermarkt.technology/portrait/header/108390-1665067957.jpg?lm=1',
    },
    {
      id: 6,
      full_name: 'Virgil van Dijk',
      display_name: 'van Dijk',
      position: 'Defender',
      country: 'Netherlands',
      team: 'Liverpool',
      value: 8,
      att_rating: 3,
      def_rating: 8,
      image:
        'https://img.a.transfermarkt.technology/portrait/header/139208-1702049837.jpg?lm=1',
    },
    {
      id: 7,
      full_name: 'Josko Gvardiol',
      display_name: 'Gvardiol',
      position: 'Defender',
      country: 'Croatia',
      team: 'Manchester City',
      value: 8.5,
      att_rating: 3.5,
      def_rating: 8,
      image:
        'https://img.a.transfermarkt.technology/portrait/header/475959-1663685941.jpg?lm=1',
    },
    {
      id: 8,
      full_name: 'Alphonso Davies',
      display_name: 'Davies',
      position: 'Defender',
      country: 'Canada',
      team: 'Bayern Munich',
      value: 7.5,
      att_rating: 5.5,
      def_rating: 7.5,
      image:
        'https://img.a.transfermarkt.technology/portrait/header/424204-1667830391.jpg?lm=1',
    },
    {
      id: 9,
      full_name: 'Trent Alexander-Arnold',
      display_name: 'Alexander-Arnold',
      position: 'Defender',
      country: 'England',
      team: 'Liverpool',
      value: 7.5,
      att_rating: 7.5,
      def_rating: 7,
      image:
        'https://img.a.transfermarkt.technology/portrait/header/314353-1701680958.jpg?lm=1',
    },
    {
      id: 10,
      full_name: 'Theo Hernández',
      display_name: 'Hernández',
      position: 'Defender',
      country: 'France',
      team: 'AC Milan',
      value: 7.5,
      att_rating: 7,
      def_rating: 7.5,
      image:
        'https://img.a.transfermarkt.technology/portrait/header/339808-1663574533.jpg?lm=1',
    },
    {
      id: 11,
      full_name: 'William Saliba',
      display_name: 'Saliba',
      position: 'Defender',
      country: 'France',
      team: 'Arsenal',
      value: 7,
      att_rating: 3,
      def_rating: 8,
      image:
        'https://img.a.transfermarkt.technology/portrait/header/495666-1684160918.jpg?lm=1',
    },
    {
      id: 12,
      full_name: 'Bruno Fernandes',
      display_name: 'Fernandes',
      position: 'Midfielder',
      country: 'Portugal',
      team: 'Manchester United',
      value: 8,
      att_rating: 8.5,
      def_rating: 6.5,
      image:
        'https://img.a.transfermarkt.technology/portrait/header/240306-1683882766.jpg?lm=1',
    },
    {
      id: 13,
      full_name: 'Declan Rice',
      display_name: 'Rice',
      position: 'Midfielder',
      country: 'England',
      team: 'Arsenal',
      value: 8,
      att_rating: 7.7,
      def_rating: 8,
      image:
        'https://img.a.transfermarkt.technology/portrait/header/357662-1687962936.jpg?lm=1',
    },
  ])
}
