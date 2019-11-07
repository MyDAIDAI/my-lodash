function slice(array, start, end) {
  // 对传入参数为空的处理
  let length = array == null ? 0 : array.length;
  if (!length) {
    return
  }
  start = start == null ? 0 : start;
  end = end == null ? length : end;

  // 对 start 为负处理
  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  // 将length赋值为需要截取的长度值
  // (end - start) >>> 0 对 end - start 的结果向下取整
  length = start > end ? 0 : ((end - start) >>> 0)
  // 保证x有意义（为数字类型），且为正整数，在有效的数组范围内（0 ～ 0xFFFFFFFF），且在无意义的情况下缺省值为0
  start >>>= 0

  const result = new Array(length)
  let index = -1 // 截取数量
  while (++index < length) {
    result[index] = array[start + index];
  }
  return result;
}
