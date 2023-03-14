export type B = {
    kind?:     string;
    etag?:     string;
    pageInfo?: PageInfo;
    items?:    Item[];
}

export type Item = {
    kind?:       Kind;
    etag?:       string;
    id?:         string;
    snippet?:    Snippet;
    statistics?: Statistics;
}

export type Kind = "youtube#video";

export type Snippet = {
    publishedAt?:          string;
    channelID?:            string;
    title?:                string;
    description?:          string;
    thumbnails?:           Thumbnails;
    channelTitle?:         string;
    tags?:                 string[];
    categoryID?:           string;
    liveBroadcastContent?: LiveBroadcastContent;
    localized?:            Localized;
    defaultAudioLanguage?: DefaultLanguage;
    defaultLanguage?:      DefaultLanguage;
}

export type DefaultLanguage = "en-US" | "en" | "ru";

export type LiveBroadcastContent = "none";

export type Localized = {
    title?:       string;
    description?: string;
}

export type Thumbnails = {
    default?:  Default;
    medium?:   Default;
    high?:     Default;
    standard?: Default;
    maxres?:   Default;
}

export type Default = {
    url?:    string;
    width?:  number;
    height?: number;
}

export type Statistics = {
    viewCount?:     string;
    likeCount?:     string;
    dislikeCount?:  string;
    favoriteCount?: string;
    commentCount?:  string;
}

export type PageInfo = {
    totalResults?:   number;
    resultsPerPage?: number;
}
