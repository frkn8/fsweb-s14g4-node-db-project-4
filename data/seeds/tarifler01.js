/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("icindekiler_adimlar").truncate();
  await knex("icindekiler").truncate();
  await knex("adimlar").truncate();
  await knex("tarifler").truncate();

  const ornTarif = {
    tarif_adi: "Spagetti Bolonez",
  };
  await knex("tarifler").insert(ornTarif);

  const ornAdimlar = [
    {
      adim_sirasi: 1,
      adim_talimati: "Büyük bir tencereyi orta ateşe koyun",
      tarif_id: 1,
    },
    {
      adim_sirasi: 2,
      adim_talimati: "1 yemek kaşığı zeytinyağı ekleyin",
      tarif_id: 1,
    },
    {
      adim_sirasi: 3,
      adim_talimati: "Yumurta ve jambonu karıştırın",
      tarif_id: 1,
    },
  ];
  await knex("adimlar").insert(ornAdimlar);

  const ornIcindekiler = [
    { icindekiler_adi: "zeytinyağı" },
    { icindekiler_adi: "tuz" },
    { icindekiler_adi: "yumurta" },
    { icindekiler_adi: "jambon" },
  ];
  await knex("icindekiler").insert(ornIcindekiler);

  const ornIcindekilerAdimlar = [
    { icindekiler_id: 1, adim_id: 1, miktar: 0.1 },
    { icindekiler_id: 2, adim_id: 1, miktar: 1 },
    { icindekiler_id: 1, adim_id: 2, miktar: 1 },
    { icindekiler_id: 3, adim_id: 3, miktar: 2 },
    { icindekiler_id: 4, adim_id: 3, miktar: 0.1 },
  ];
  await knex("icindekiler_adimlar").insert(ornIcindekilerAdimlar);
};