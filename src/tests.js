
const boggle_solver = require('./boggle_solver');

var grid1 = [ ["A", "B"], ["C", "D"] ];
var dictionary1 = ["A", "B", "AC", "ACA", "ACB", "DE"];
var solution1 = ['ACB'];

test('Simple 2x2 Grid Sample', () => {
expect(boggle_solver(grid1,dictionary1)).toEqual(solution1);
});

var grid2 = [ ["M", "N", "O", "P"], ["L", "F", "G", "H"] ];
var dictionary2 = ["AAE", "ADB", "ABD", "ABC"];
var emptyArray = [];

test('No valid should be word found', () => {
expect(boggle_solver(grid2, dictionary2)).toEqual(emptyArray);
});

var grid3 = [ ["A", "B"], ["C", "D"] ];
var dictionary3 = ["A", "B", "AC", "ACA", "ACB", "DE"];
var solution3 = ['ACB', 'A'];

test('Wrong 2x2 Grid Sample', () => {
expect(boggle_solver(grid3,dictionary3)).not.toEqual(solution3);
});

var grid4 = [["A", "B", "C", "D"], ["E", "F", "G", "H"], ["I", "J", "K", "L"], ["A", "B", "C", "D"]];
var dictionary4 = ["ABEF", "AFJIEB", "DGKD", "DGKA"];
var solution4 = ["ABEF", "AFJIEB", "DGKD"];

test('Complex 4x4 Grid Sample', () => {
expect(boggle_solver(grid4, dictionary4)).toEqual(solution4);
});


var grid5 = [ ["M", "N", "O", "P"], ["L", "F", "G", "H"] ];
var dictionary5 = ["AAE", "ADB", "ABD", "ABC"];
var solution5 = [];

test('Expect no valid solution', () => {
expect(boggle_solver(grid5, dictionary5)).toEqual(solution5);
});

var grid6 = [ ["1", "2", "3", "4"], ["5", "6", "7", "8"], ["9", "0", "1", "8"]];
var dictionary6 = ["123", "010", "360", "ABC"];
var solution6 = ["123", "360"];

test('Numbers as string in grid', () => {
expect(boggle_solver(grid6, dictionary6)).toEqual(solution6);
});

var grid7 = [ ["A", "B"], ["C", "D"] ];
var dictionary7 = [];
var solution7 = [];

test('Empty Dictionary ', () => {
expect(boggle_solver(grid7, dictionary7)).toEqual(solution7);
});

var grid8 = [];
var dictionary8 = [];
var emptyArray = [];

test('Empty 1D Grid,Empty Dictionary, should return emptyArray', () => {
expect(boggle_solver(grid8, dictionary8)).toEqual(emptyArray);
});

var grid12 = [[]];
var dictionary12 = [];
var emptyArray = [];

test('Empty 2D Grid,Empty Dictionary, should return emptyArray', () => {
expect(boggle_solver(grid12, dictionary12)).toEqual(emptyArray);
});


var grid9 = [ [ 1, 2, 3, 4], [ 5, 6, 7, 8], [9, 0, 1, 8]];
var dictionary9 = ["123", "010", "360", "ABC"];
var solution6 = ["123", "360"];

test('Grid with Integers and dictionary with numbers as string', () => {
expect(boggle_solver(grid9, dictionary9)).toEqual(solution6);
});

var grid10 = [ [ 1, 2, 3, 4], [ 5, 6, 7, 8], [9, 0, 1, 8]];
var dictionary10 = [123, 100, 360];
var emptyArray = [];

test('Grid with Integers and dictionary with Integers', () => {
expect(boggle_solver(grid10, dictionary10)).toEqual(emptyArray);
});

var grid11 = [ ["A", "B"], ["C", "QUA"] ,["D","E"]];
var dictionary11 = ["A", "B", "AC", "ACA", "ACB", "DE", "QUAB"];
var solution11 = ['ACB', "QUAB"];

test('Multiple character in grid slots ', () => {
expect(boggle_solver(grid11, dictionary11)).toEqual(solution11);
});
