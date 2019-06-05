/*
 * @Author: 小钻风.fuzebo
 * @Date: 2019-06-05 21:16:51
 * @Last Modified by: 小钻风.fuzebo
 * @Last Modified time: 2019-06-05 23:57:23
 */

// 第二章 数组

/**
  1, 数组的标准定义: 一个存储元素的线性集合，元素可以通过索引来任意存值，索引通常是数字，用来计算元素之间存储位置的偏移量。
        // js中的数组是一种特殊的对象。
  2, 使用数组
      var arr = [];  // arr.length = 0
      var arr = new Array(); //  arr.length = 0;
      var arr = new Array(3); // arr.length = 3;
      var arr = new Array(1,2,3,4); //  arr.length = 4;

      Array.isArray() // 判断是不是数组   Array.isArray(arr)

      split()  // 字符串生成数组

      indexOf()   lastIndexOf() //返回第一个相当的，找不到返回-1

      join()    toString()  // 数组的字符串表示

      concat()  splice()  // 通过已有数组创建新的数组
            concat() 合并多个数组创建一个新的数组
            splice() 截取一个数组的子集创建一个新的数组

      为数组添加元素：
        push()  添加到末尾   可以添加多个
        unshift() 将元素添加到数组的开头   可以添加多个

        pop()  删除末尾的元素
        shift() 删除第一个    将删除的元素返回

        从数组中间的位子添加或者删除
        splice(添加元素开始的位置, 要删除的元素个数, 想要添加进数组的元素)

        sort()  //排序   按照字典顺序对元素进行排序  默认是字符串类型排序
              对于数字的排序
              sort((num1,num2)=> num1-num2)

         迭代器方法
           不生成新数组的方法
           forEach((item,index)=>{}); 对数组中的每一个元素使用该函数

           every(item=>a>0)     接受一个返回值为Boolean类型的函数  均为true 返回true ,

          some(item=>a>0)            接受一个返回值为Boolean类型的函数 一个为true 返回true ,

          reduce((total,item)=>totla+item);    接受一个函数作为累加器,最终计算为一个累加值 // 或者字符累加
          reduceRight                            从右往左执行

      生成新数组的迭代方法
        map(item=>item+1)    返回一个新的数组 该数组的元素是对原有元素应用某个函数得到的结果。

        filter(item=>item>0) 返回的是布尔值类型的函数  返回结果为true的元素   过滤


        二维数组:
          处理二维数组的元素；
 */

/**
练习:
1,创建一个记录学生成绩的对象， 提供一个添加成绩的方法， 以及一个显示学生平均成绩的方法。
2,将一组单词存储在一个数组中， 并按正序和倒序分别显示这些单词。
3,修改本章前面出现过的 weeklyTemps 对象， 使它可以使用一个二维数组来存储每月的有用数据。 增加一些方法用以显示月平均数、 具体某一周平均数和所有周的平均数。
4,创建这样一个对象， 它将字母存储在一个数组中， 并且用一个方法可以将字母连在一起， 显示成一个单词。
 */
