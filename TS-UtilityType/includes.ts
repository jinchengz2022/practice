type MyIncludes<T extends unknown[], K> = T[number] extends K ? true : false;

// type inclu<T extends unknown[], K> = T[number] extends K ? true : false;