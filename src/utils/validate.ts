/**
 * 文件类型
 * @param fileName
 * @param allowedTypes
 * @returns
 */
export const validateFileType = (
	fileName: string,
	allowedTypes: string[]
): boolean => {
	const fileExtension = fileName.split(".").pop()?.toLowerCase();
	return fileExtension
		? allowedTypes.map((v) => v.toLowerCase()).includes(fileExtension)
		: false;
};

/**
 * 整数
 * @param value
 * @returns
 */
export const validateInteger = (value: string): boolean => {
	return /^[0-9]+$/.test(value);
};

/**
 * 整数或小数
 * @param value
 * @returns
 */
export const validateNumber = (value: string): boolean => {
	return /^(0|[1-9]\d*)(\.\d+)?$/.test(value);
};

/**
 * 手机号码
 * @param value
 * @returns
 */
export const validatePhone = (value: string): boolean => {
	return /^1[3-9]\d{9}$/.test(value);
};

/**
 * 邮箱
 * @param value
 * @returns
 */
export const validateEmail = (value: string): boolean => {
	const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
	return emailRegex.test(value) && value.length < 40;
};

/**
 * 密码 包含大小写字母和数字、且不小于8位
 * @param value
 * @returns
 */
export const validatePassword = (value: string): boolean => {
	return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/.test(value);
};

/**
 * 真实姓名：仅可以输入汉字、英文和 ·
 * @param value
 * @returns
 */
export const validateRealName = (value: string): boolean => {
	const nameRegex =
		/(^([a-zA-Z]+\s)*[a-zA-Z]+$)|(^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$)/;
	return nameRegex.test(value);
};

/**
 * 身份证号码
 * @param value
 * @returns
 */
export const validateIdCard = (value: string): boolean => {
	const idCardRegex =
		/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
	if (!idCardRegex.test(value)) return false;

	const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
	const parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
	let sum = 0;
	for (let i = 0; i < 17; i++) {
		sum += parseInt(value[i]) * factor[i];
	}
	const lastChar = value[17].toUpperCase();
	return parity[sum % 11] === lastChar;
};
