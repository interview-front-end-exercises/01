/**
 * Given an n x n 2d grid map of '1's(land) and '0's(water),
 * return the number of islands
 * 
 * An island is surrounde by water and is formed by connecting
 * adjacent lands horizontally or vertically. You may assume
 * all four edges of the grid are all surrounded by water.
 */

const numIslands = (grid) => {

    /**
     * Count number of times we traverse the grid
     */
    let islandCount = 0;

    /**
     * Copy the grid and fill all the spaces with false
     */
    const visited = grid.map((row) => {
        row.map(cell => false);
    });

    const getAdjNeighbors = (i, j, grid, visited) => {
        const adjNeighbors =[];

        if(i > 0 && !visited[i - 1][j]) {
            adjNeighbors.push([i-1, j]);
        }

        if(i < grid.length - 1 && !visited[i + 1][j]) {
            adjNeighbors.push([i+1, j]);
        }

        if(j > 0 && !visited[i][j - 1]) {
            adjNeighbors.push([i, j - 1]);
        }

        if(j < grid[0].length - 1 && !visited[i][j + 1]) {
            adjNeighbors.push([i, j+1]);
        }

        return adjNeighbors;
    }

    /**
     * Depth first search
     * @param {*} i 
     * @param {*} j 
     * @param {*} grid 
     * @param {*} visited 
     */
    const DFS = (i, j, grid, visited) => {
        const stack = [[i, j]];
        let islandSize = 0;

        while(stack.length) {
            let curNode = stack.pop();
            let [i, j] = curNode;

            /**
             * Check if visited at i and j
             */
            if (visited[i][j]) {
                continue;
                visited[i][j] = true;

                /**
                 * Check if cell is part of an island
                 */
                if(grid[i][j] === 0) {
                    continue;
                } else {
                    islandSize++;
                }

                let adjNeighbors = getAdjNeighbors(i,j,grid,visited);
                stack.push(...adjNeighbors);
            }

            return islandSize > 0 ? true : false;
        }

    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            
        }
    }

    return islandCount;

}

const grid = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
]
console.log(numIslands(grid));