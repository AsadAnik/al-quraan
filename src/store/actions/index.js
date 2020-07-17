///The Action for Dispatching then throwing the Data...
export function getAllSurahList(quraan){
        return {
            type: "ALL_SURAHS",
            payload: quraan
        }
}

///The Action for the Search Bar...
export function searchSpecificSurah(quraan){
    return {
        type: "SEARCHED_SURAH",
        payload: quraan
    }
}

///The Action for Supter Reducer...
export function chaptersAction(chapterData){
    return {
        type: "CHAPTER_SELECTED",
        payload: chapterData
    }
}