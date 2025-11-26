import { Guest, TableData } from './types';

// Helper to generate IDs
const generateId = () => Math.random().toString(36).substr(2, 9);

// Raw Data processing from the provided OCR
// We structure this manually based on the provided text to ensure accuracy.

export const RAW_TABLES: TableData[] = [
  {
    tableNumber: '主桌',
    category: '主桌',
    notes: '新娘對蝦殼類過敏',
    guests: [
      { id: generateId(), name: '盧正章', tableNumber: '主桌', seatNumber: 1, category: '新郎', note: '新郎' },
      { id: generateId(), name: '張令潔', tableNumber: '主桌', seatNumber: 2, category: '新娘', note: '新娘' },
      { id: generateId(), name: '盧清泉', tableNumber: '主桌', seatNumber: 3, category: '主桌', note: '盧爸' },
      { id: generateId(), name: '張景昌', tableNumber: '主桌', seatNumber: 4, category: '主桌', note: '張爸' },
      { id: generateId(), name: '黃慈雪', tableNumber: '主桌', seatNumber: 5, category: '主桌', note: '盧媽' },
      { id: generateId(), name: '闕凰珠', tableNumber: '主桌', seatNumber: 6, category: '主桌', note: '張媽' },
      { id: generateId(), name: '盧美菁', tableNumber: '主桌', seatNumber: 7, category: '主桌', note: '二姑姑' },
      { id: generateId(), name: '闕銘煌', tableNumber: '主桌', seatNumber: 8, category: '主桌', note: '大舅' },
      { id: generateId(), name: '戴玉政', tableNumber: '主桌', seatNumber: 9, category: '主桌', note: '二姑丈' },
      { id: generateId(), name: '吳明吉', tableNumber: '主桌', seatNumber: 10, category: '主桌', note: '舅公' },
      { id: generateId(), name: '蘇美麗', tableNumber: '主桌', seatNumber: 12, category: '主桌', note: '媒人' }, // No seat 11 listed in OCR main table block
    ]
  },
  {
    tableNumber: 1,
    category: '男方家人',
    guests: [
      { id: generateId(), name: '盧城絨四叔', tableNumber: 1, seatNumber: 1, category: '男方家人' },
      { id: generateId(), name: '四叔(堂哥)', tableNumber: 1, seatNumber: 2, category: '男方家人' },
      { id: generateId(), name: '四叔(堂哥)', tableNumber: 1, seatNumber: 3, category: '男方家人' },
      { id: generateId(), name: '四叔(堂哥女友)', tableNumber: 1, seatNumber: 4, category: '男方家人' },
      { id: generateId(), name: '盧清埤五叔', tableNumber: 1, seatNumber: 5, category: '男方家人' },
      { id: generateId(), name: '劉美花五嬸', tableNumber: 1, seatNumber: 6, category: '男方家人' },
      { id: generateId(), name: '五叔(堂姐)', tableNumber: 1, seatNumber: 7, category: '男方家人' },
      { id: generateId(), name: '五叔(堂哥)', tableNumber: 1, seatNumber: 8, category: '男方家人' },
      { id: generateId(), name: '盧清棟六叔', tableNumber: 1, seatNumber: 9, category: '男方家人' },
    ]
  },
  {
    tableNumber: 2,
    category: '男方家人',
    guests: [
      { id: generateId(), name: '二姑姑(堂姐)', tableNumber: 2, seatNumber: 1, category: '男方家人' },
      { id: generateId(), name: '二姑姑(堂姐)', tableNumber: 2, seatNumber: 2, category: '男方家人' },
      { id: generateId(), name: '二姑姑(堂弟)', tableNumber: 2, seatNumber: 3, category: '男方家人' },
      { id: generateId(), name: '盧春格三姑姑', tableNumber: 2, seatNumber: 4, category: '男方家人' },
      { id: generateId(), name: '盧春鴻四姑姑', tableNumber: 2, seatNumber: 5, category: '男方家人' },
      { id: generateId(), name: '洪輝游四姑丈', tableNumber: 2, seatNumber: 6, category: '男方家人' },
      { id: generateId(), name: '四姑姑(堂妹)', tableNumber: 2, seatNumber: 7, category: '男方家人' },
      { id: generateId(), name: '四姑姑(堂弟)', tableNumber: 2, seatNumber: 8, category: '男方家人' },
      { id: generateId(), name: '盧玲琼小姑姑', tableNumber: 2, seatNumber: 9, category: '男方家人' },
      { id: generateId(), name: '張永志小姑丈', tableNumber: 2, seatNumber: 10, category: '男方家人' },
    ]
  },
  {
    tableNumber: 3,
    category: '女方親戚',
    guests: [
      { id: generateId(), name: '張育綺', tableNumber: 3, seatNumber: 1, category: '女方親戚', note: '新娘妹妹' },
      { id: generateId(), name: '張惠卿', tableNumber: 3, seatNumber: 2, category: '女方親戚', note: '大姑姑' },
      { id: generateId(), name: '張惠娟', tableNumber: 3, seatNumber: 3, category: '女方親戚', note: '二姑姑' },
      { id: generateId(), name: '張惠珠', tableNumber: 3, seatNumber: 4, category: '女方親戚', note: '小姑姑' },
      { id: generateId(), name: '張芮瑄', tableNumber: 3, seatNumber: 5, category: '女方親戚', note: '兒童椅' },
      { id: generateId(), name: '廖育霆', tableNumber: 3, seatNumber: 6, category: '女方親戚' },
      { id: generateId(), name: '廖恩頡', tableNumber: 3, seatNumber: 7, category: '女方親戚' },
      { id: generateId(), name: '張寶幸', tableNumber: 3, seatNumber: 8, category: '女方親戚' },
      { id: generateId(), name: '張寶華', tableNumber: 3, seatNumber: 9, category: '女方親戚' },
    ]
  },
  {
    tableNumber: 5,
    category: '男方朋友',
    guests: [
      { id: generateId(), name: '楊哲斌', tableNumber: 5, seatNumber: 1, category: '男方朋友' },
      { id: generateId(), name: '鄔丁財', tableNumber: 5, seatNumber: 2, category: '男方朋友' },
      { id: generateId(), name: '林恆生', tableNumber: 5, seatNumber: 3, category: '男方朋友' },
      { id: generateId(), name: '柯春平', tableNumber: 5, seatNumber: 4, category: '男方朋友' },
      { id: generateId(), name: '許建德', tableNumber: 5, seatNumber: 5, category: '男方朋友' },
      { id: generateId(), name: '張石成', tableNumber: 5, seatNumber: 6, category: '男方朋友' },
      { id: generateId(), name: '夏賢材', tableNumber: 5, seatNumber: 7, category: '男方朋友' },
      { id: generateId(), name: '王進富', tableNumber: 5, seatNumber: 8, category: '男方朋友' },
      { id: generateId(), name: '張錦隆', tableNumber: 5, seatNumber: 9, category: '男方朋友' },
      { id: generateId(), name: '彭守強', tableNumber: 5, seatNumber: 10, category: '男方朋友' },
    ]
  },
  {
    tableNumber: 6,
    category: '男方朋友',
    guests: [
      { id: generateId(), name: '蘇福田', tableNumber: 6, seatNumber: 1, category: '男方朋友' },
      { id: generateId(), name: '劉美花', tableNumber: 6, seatNumber: 2, category: '男方朋友' },
      { id: generateId(), name: '曾榮興', tableNumber: 6, seatNumber: 3, category: '男方朋友' },
      { id: generateId(), name: '潘明朝', tableNumber: 6, seatNumber: 4, category: '男方朋友' },
      { id: generateId(), name: '吳志勇', tableNumber: 6, seatNumber: 5, category: '男方朋友' },
      { id: generateId(), name: '張樹森', tableNumber: 6, seatNumber: 6, category: '男方朋友' },
      { id: generateId(), name: '鐘玉芳', tableNumber: 6, seatNumber: 7, category: '男方朋友' },
      { id: generateId(), name: '楊錦祿', tableNumber: 6, seatNumber: 8, category: '男方朋友' },
      { id: generateId(), name: '趙水赺', tableNumber: 6, seatNumber: 9, category: '男方朋友' },
      { id: generateId(), name: '林桂蘭', tableNumber: 6, seatNumber: 10, category: '男方朋友' },
    ]
  },
  {
    tableNumber: 7,
    category: '男方家人',
    guests: [
      { id: generateId(), name: '盧清水二伯', tableNumber: 7, seatNumber: 1, category: '男方家人' },
      { id: generateId(), name: '白明正二伯', tableNumber: 7, seatNumber: 2, category: '男方家人' },
      { id: generateId(), name: '盧雪玫二伯', tableNumber: 7, seatNumber: 3, category: '男方家人' },
      { id: generateId(), name: '張慶瑞二伯', tableNumber: 7, seatNumber: 4, category: '男方家人' },
      { id: generateId(), name: '盧馨玲二伯', tableNumber: 7, seatNumber: 5, category: '男方家人' },
      { id: generateId(), name: '二伯(其他)', tableNumber: 7, seatNumber: 6, category: '男方家人' }, // OCR just says 二伯
      { id: generateId(), name: '二伯(其他)', tableNumber: 7, seatNumber: 7, category: '男方家人' },
      { id: generateId(), name: '二伯(其他)', tableNumber: 7, seatNumber: 8, category: '男方家人' },
      { id: generateId(), name: '盧紀憲', tableNumber: 7, seatNumber: 9, category: '男方家人' },
      { id: generateId(), name: '黄詩雅', tableNumber: 7, seatNumber: 10, category: '男方家人' },
    ]
  },
  {
    tableNumber: 8,
    category: '男方家人',
    guests: [
      { id: generateId(), name: '藍介宏', tableNumber: 8, seatNumber: 1, category: '男方家人', note: '表哥' },
      { id: generateId(), name: '表哥老婆', tableNumber: 8, seatNumber: 2, category: '男方家人' },
      { id: generateId(), name: '表哥兒子', tableNumber: 8, seatNumber: 3, category: '男方家人' },
      { id: generateId(), name: '表哥女兒', tableNumber: 8, seatNumber: 4, category: '男方家人' },
      { id: generateId(), name: '盧彥志', tableNumber: 8, seatNumber: 5, category: '男方家人' },
      { id: generateId(), name: '呂苡宣', tableNumber: 8, seatNumber: 6, category: '男方家人' },
      { id: generateId(), name: '廖以崇', tableNumber: 8, seatNumber: 7, category: '男方家人' },
      { id: generateId(), name: '廖以崇媽媽', tableNumber: 8, seatNumber: 8, category: '男方家人' },
      { id: generateId(), name: '蕭耀宗', tableNumber: 8, seatNumber: 9, category: '男方家人' },
      { id: generateId(), name: '宋惠馨', tableNumber: 8, seatNumber: 10, category: '男方家人' },
    ]
  },
  {
    tableNumber: 10,
    category: '男方朋友',
    guests: [
      { id: generateId(), name: '柯俊雄', tableNumber: 10, seatNumber: 1, category: '男方朋友' },
      { id: generateId(), name: '鐘文喜', tableNumber: 10, seatNumber: 2, category: '男方朋友' },
      { id: generateId(), name: '溫昌益', tableNumber: 10, seatNumber: 3, category: '男方朋友' },
      { id: generateId(), name: '張家逢', tableNumber: 10, seatNumber: 4, category: '男方朋友' },
      { id: generateId(), name: '盧長成', tableNumber: 10, seatNumber: 5, category: '男方朋友' },
      { id: generateId(), name: '尤金上', tableNumber: 10, seatNumber: 6, category: '男方朋友' },
      { id: generateId(), name: '張菊仔', tableNumber: 10, seatNumber: 7, category: '男方朋友' },
      { id: generateId(), name: '皇朝暉', tableNumber: 10, seatNumber: 8, category: '男方朋友' },
      { id: generateId(), name: '張幸義', tableNumber: 10, seatNumber: 9, category: '男方朋友' },
      { id: generateId(), name: '鄔美玉', tableNumber: 10, seatNumber: 10, category: '男方朋友' },
    ]
  },
  {
    tableNumber: 21,
    category: '新郎朋友',
    guests: [
      { id: generateId(), name: '張正義', tableNumber: 21, seatNumber: 1, category: '新郎朋友' },
      { id: generateId(), name: '鍾育芝', tableNumber: 21, seatNumber: 2, category: '新郎朋友' },
      { id: generateId(), name: 'ED女兒', tableNumber: 21, seatNumber: 3, category: '新郎朋友' },
      { id: generateId(), name: '袁敬程', tableNumber: 21, seatNumber: 4, category: '新郎朋友' },
      { id: generateId(), name: '敬程老婆', tableNumber: 21, seatNumber: 5, category: '新郎朋友' },
      { id: generateId(), name: '王文宏', tableNumber: 21, seatNumber: 6, category: '新郎朋友' },
      { id: generateId(), name: '文宏老婆', tableNumber: 21, seatNumber: 7, category: '新郎朋友' },
      { id: generateId(), name: '葉任航', tableNumber: 21, seatNumber: 8, category: '新郎朋友' },
      { id: generateId(), name: '任航老婆', tableNumber: 21, seatNumber: 9, category: '新郎朋友', note: '兒童椅-任航女兒' },
    ]
  },
  {
    tableNumber: 22,
    category: '素食桌',
    notes: '素食桌',
    guests: [
        { id: generateId(), name: '22桌賓客(素)', tableNumber: 22, seatNumber: 1, category: '素食桌', note: '素食' }
    ]
  },
  {
    tableNumber: 25,
    category: '新郎朋友',
    guests: [
      { id: generateId(), name: '莊小旻', tableNumber: 25, seatNumber: 1, category: '新郎朋友' },
      { id: generateId(), name: '連千惠', tableNumber: 25, seatNumber: 2, category: '新郎朋友' },
      { id: generateId(), name: '小旻兒子', tableNumber: 25, seatNumber: 3, category: '新郎朋友' },
      { id: generateId(), name: '林雅士', tableNumber: 25, seatNumber: 4, category: '新郎朋友' },
      { id: generateId(), name: '謝文君', tableNumber: 25, seatNumber: 5, category: '新郎朋友' },
      { id: generateId(), name: '黃寶慧', tableNumber: 25, seatNumber: 6, category: '新郎朋友' },
      { id: generateId(), name: '張瑞蘭', tableNumber: 25, seatNumber: 7, category: '新郎朋友' },
      { id: generateId(), name: '朱哲丘', tableNumber: 25, seatNumber: 8, category: '新郎朋友' },
      { id: generateId(), name: '廖文莉', tableNumber: 25, seatNumber: 9, category: '新郎朋友' },
    ]
  },
  {
    tableNumber: 26,
    category: '新郎朋友',
    guests: [
      { id: generateId(), name: '李建穎', tableNumber: 26, seatNumber: 1, category: '新郎朋友', note: '兒童椅-建穎女兒' },
      { id: generateId(), name: '李龍怡', tableNumber: 26, seatNumber: 2, category: '新郎朋友' },
      { id: generateId(), name: '建穎兒子', tableNumber: 26, seatNumber: 3, category: '新郎朋友' },
      { id: generateId(), name: '黃宗偉', tableNumber: 26, seatNumber: 4, category: '新郎朋友' },
      { id: generateId(), name: '李思儀', tableNumber: 26, seatNumber: 5, category: '新郎朋友' },
      { id: generateId(), name: '李政勳', tableNumber: 26, seatNumber: 6, category: '新郎朋友' },
      { id: generateId(), name: '傅婷煒', tableNumber: 26, seatNumber: 7, category: '新郎朋友' },
      { id: generateId(), name: '蔡昕宏', tableNumber: 26, seatNumber: 8, category: '新郎朋友' },
      { id: generateId(), name: '游家華', tableNumber: 26, seatNumber: 9, category: '新郎朋友' },
      { id: generateId(), name: '陳冠銘', tableNumber: 26, seatNumber: 10, category: '新郎朋友' },
    ]
  },
   {
    tableNumber: 28,
    category: '預備桌',
    guests: []
  }
];

// Flattens the table data to make searching guests easier
export const ALL_GUESTS: Guest[] = RAW_TABLES.flatMap(table => table.guests);

export const TABLE_MAP_LAYOUT = [
  '主桌', 1, 2, 3, 5,
  6, 7, 8, 9, 10,
  11, 12, 13, 15, 16,
  17, 18, 19, 20, 21,
  22, 23, 25, 26, 27, 28
];
