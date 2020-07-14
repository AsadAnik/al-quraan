///The Action for Dispatching then throwing the Data..
export function getAllSurahList(full_quraan){
      ///Fetched data from Firebase(Database)...
        return {
            type: "ALL_SURAHS",
            payload: {
                full_quraan,
            }
        }
}