import React, { useState, useEffect } from "react";

/* ---------------------------------------------------------
   טוקנים עיצוביים
--------------------------------------------------------- */
const C = {
  bg: "#FFF8F3",
  bgSoft: "#FFEFE9",
  pink: "#F3C7CE",
  pinkDeep: "#E4A0AC",
  rose: "#B65C73",
  roseDeep: "#8C3A50",
  gold: "#C79A4B",
  goldSoft: "#EAD6A6",
  purple: "#CBB8E8",
  purpleDeep: "#9A85C9",
  ink: "#3B2A38",
  inkSoft: "#7A6271",
  white: "#FFFFFF",
};

/* ---------------------------------------------------------
   תוכן: קטגוריות ראשיות
   level = "עוצמה רגשית" למיון הרצף האוטומטי (1 קליל -> 4 אינטימי)
--------------------------------------------------------- */
const CATEGORIES = [
  {
    key: "memories",
    title: "זיכרונות משותפים",
    icon: "❤",
    color: C.rose,
    soft: C.pink,
    blurb: "רגעים שכבר חיינו, ושווה לחזור אליהם",
    level: 1,
    cards: [
      "איך הרגשת ברגע שראית אותי בפעם הראשונה?",
      "מה היה הדייט הראשון שלנו, ולמה הוא נחרט בזיכרון?",
      "איזו שיחה בינינו את/ה הכי אוהב/ת להיזכר בה?",
      "מתי צחקנו יחד עד דמעות?",
      "איזה רגע קטן גרם לך להבין שזה רציני בינינו?",
      "מה היה הטיול הכי יפה שעשינו ביחד?",
      "איזו מתנה שקיבלת ממני נגעה לך הכי הרבה?",
      "איזה אתגר עברנו ביחד שגרם לנו להתחזק?",
      "מה היה הרגע המביך הכי מצחיק שקרה לנו?",
      "איפה היינו כשהרגשנו הכי קרובים אחד לשני?",
      "מה הזיכרון הראשון שעולה לך כשחושבים על ההתחלה שלנו?",
      "איזה שיר מזכיר לך אותנו, ולמה?",
      "מה היה הרגע שבו הרגשת הכי גאה בי?",
      "איזו ארוחה משותפת זכורה לך במיוחד?",
      "מה היה הדבר הכי ספונטני שעשינו יחד?",
      "איזה לילה נשאר חקוק אצלך בזיכרון?",
      "מה היה הרגע שבו ידעת שאת/ה רוצה לבנות איתי בית?",
      "איזו תקופה הייתה הקשה ביותר שעברנו יחד, ואיך יצאנו ממנה?",
      "מה היה המקום הראשון שגרנו בו ביחד, ומה זוכרים ממנו?",
      "איזה חג או אירוע משפחתי במיוחד זכור לך?",
      "מתי הרגשת שאני 'תופס/ת' אותך הכי טוב?",
      "איזו הפתעה קטנה שעשיתי לך עדיין מחייכת אותך?",
      "מה היה הרגע שבו צחקנו כל כך שלא יכולנו להפסיק?",
      "איזה רגע שקט ופשוט ביחד את/ה הכי אוהב/ת לזכור?",
      "איזה רגע גרם לך לדעת שאני 'האחד/ת'?",
      "מה היה הרגע שבו הרגשת הכי גאה להציג אותי לחברים או למשפחה?",
      "איזו הפתעה תכננתי לך שהצליחה מעבר לציפיות?",
      "מה היה הרגע הכי רומנטי שקרה לנו בטבע?",
      "איזה זיכרון מהאירוסין או החתונה הכי מרגש אותך?",
      "מה היה הלילה הראשון שגרנו בו ביחד?",
      "איזו מחלוקת ישנה שהיום אתם צוחקים עליה?",
      "מה היה הרגע שבו גיליתם שאתם צוחקים על אותו דבר בדיוק?",
      "איזה מקום קטן יש לו משמעות מיוחדת עבורכם?",
      "מה היה הרגע שבו הרגשת שאני רואה אותך במיטבך?",
      "איזו מתנה הפתיעה אותך הכי הרבה שלא ציפית לה?",
      "מה היה הדבר הראשון שגרם לך למשוך תשומת לב אליי?",
      "איזה רגע קטן ביום־יום הפך אצלכם למסורת אהובה?",
      "מה היה הרגע שבו התחלתם לתכנן עתיד משותף?",
      "איזה סרט, מקום או שיר קשור לזיכרון משותף מיוחד?",
      "מה הזיכרון הכי מצחיק מנסיעה משותפת?",
      "איזה רגע גרם לך להבין כמה אני אכפתי/ת ממך?",
      "מה היה הרגע שהרגשתם הכי חופשיים ביחד?",
      "איזו שיחת לילה מאוחרת זכורה לכם הכי הרבה?",
      "מה היה הרגע שבו תמכתי בך בצורה שהכי הייתה חשובה לך?",
      "איזה אתגר קטן פתרתם ביחד וגרם לכם לגאווה משותפת?",
      "מה הזיכרון הראשון שעולה לכם כשחושבים על 'בית'?",
      "איזה רגע קטן גרם לכם לחייך היום בלי סיבה נראית לעין?",
      "מה היה הרגע שהבנתם שיש לכם שפה סודית משלכם?",
    ],
  },
  {
    key: "depth",
    title: "שאלות עומק",
    icon: "💬",
    color: C.purpleDeep,
    soft: C.purple,
    blurb: "שאלות שפותחות שיחה אמיתית",
    level: 2,
    cards: [
      "מה אני עושה שגורם לך להרגיש הכי אהוב/ה?",
      "באיזה תחום בחיים שלנו היית רוצה שנשקיע יותר זמן?",
      "מהי התכונה שלי שאת/ה הכי מעריך/ה?",
      "מה החלום המשותף שעדיין לא הגשמנו?",
      "איך אני יכול/ה לתמוך בך טוב יותר בתקופה הזו?",
      "מתי הרגשת הכי בטוח/ה בקשר בינינו?",
      "מה היית רוצה שנעשה ביחד יותר?",
      "איזה צד בי הכי הפתיע אותך לאורך הקשר?",
      "מה גורם לך להרגיש שאני שם/ה בשבילך?",
      "איזה דבר קטן שאני עושה את/ה לא תמיד אומר/ת לי כמה הוא חשוב לך?",
      "מה היית רוצה שאני אדע עליך שאולי לא תמיד את/ה משתף/ת?",
      "איך נראית בעיניך השנה הבאה שלנו ביחד?",
      "מה עוזר לך להרגיש רגוע/ה אחרי יום קשה?",
      "באיזה רגע הרגשת שאני באמת מקשיב/ה לך?",
      "מה היית רוצה לשנות בדרך שבה אנחנו מתקשרים?",
      "איזו תמיכה את/ה הכי צריך/ה ממני בתקופה הזו?",
      "מה גורם לך לדעת שאת/ה לא לבד בקשר הזה?",
      "איזה ערך משותף שלנו הכי חשוב לך לשמר?",
      "מה היית רוצה שנדבר עליו יותר?",
      "איך את/ה רוצה שניראה כזוג בעוד עשר שנים?",
      "מתי הרגשת שאני רואה אותך באמת?",
      "מה הדבר שהכי קשה לך לבקש ממני, ולמה?",
      "איזה רגע איתי גרם לך להרגיש שאת/ה במקום הנכון?",
      "מה היית רוצה שאני אזכור עליך תמיד?",
      "איזה חשש קטן יש לך לגבי העתיד שלנו, ומה יעזור לך להרגיש בטוח/ה יותר?",
      "מה גורם לך להרגיש שאני מכיר/ה אותך לעומק?",
      "איזה צורך רגשי שלך הכי חשוב לך שאני אזכור?",
      "מה היית רוצה שאני אבין טוב יותר על איך את/ה מתמודד/ת עם לחץ?",
      "איזו מילת עידוד הכי עוזרת לך לשמוע ממני?",
      "מה גורם לך להרגיש הכי מוערך/ת בזוגיות?",
      "איזה שינוי קטן בשגרה שלנו היה משפר את היום־יום?",
      "מה היית רוצה שנעשה יחד כדי לחגוג הצלחות קטנות?",
      "איזה פחד זוגי הכי מטריד אותך, ואיך אפשר להתמודד יחד?",
      "מה גורם לך להרגיש שהזוגיות שלנו בטוחה?",
      "איזה ערך שגדלת עליו הכי חשוב לך להעביר גם לזוגיות שלנו?",
      "מה היית רוצה שאני אשאל אותך יותר בשגרה?",
      "איזה רגע לאחרונה גרם לך להרגיש רחוק/ה ממני, ולמה?",
      "מה עוזר לך לשוב ולהתחבר אליי אחרי מריבה?",
      "איזה חלום אישי שלך הייתי יכול/ה לתמוך בו יותר?",
      "מה גורם לך להרגיש שאני שותף/ה אמיתי/ת לחיים שלך?",
      "איזו מחשבה על הזוגיות שלנו את/ה שומר/ת לעצמך ולא תמיד משתף/ת?",
      "מה היית רוצה שאני אדע על הדרך שבה את/ה אוהב/ת לקבל תמיכה?",
      "איזה סוג של קרבה הכי חשוב לך כרגע — פיזית, רגשית, או שכלית?",
      "מה גורם לך להרגיש הכי בטוח/ה לשתף רגשות קשים?",
      "איזה שינוי חיובי ראית בעצמך מאז שאנחנו ביחד?",
      "מה הדבר הכי חשוב שלמדת עליי בשנה האחרונה?",
      "איזו תמיכה קטנה הייתה עוזרת לך השבוע?",
      "מה היית רוצה שנבנה יחד בחמש השנים הקרובות?",
    ],
  },
  {
    key: "gestures",
    title: "מחוות אהבה",
    icon: "🌹",
    color: C.gold,
    soft: C.goldSoft,
    blurb: "מחוות פעולה, קרבה וחום",
    level: 3,
    cards: [
      "תנו נשיקה ארוכה ואיטית, כאילו יש לכם כל הזמן שבעולם.",
      "חבקו חיבוק צמוד של דקה שלמה, גוף אל גוף, בלי למהר.",
      "הדליקו נרות הערב וכבו את המסכים לשעה שלמה, רק שניכם.",
      "הפתיעו אחד את השני בפריט לבוש חדש שהשני עוד לא ראה עליכם.",
      "תנו עיסוי כתפיים וגב איטי של חמש דקות, בלי לדבר.",
      "צאו יחד למקלחת או לאמבטיה, בלי טלפונים, רק אתם.",
      "רקדו צמודים חצי דקה, עיניים בעיניים, בלי מילים.",
      "בשלו יחד ארוחה קטנה לאור נרות, גם אם השעה מאוחרת.",
      "כתבו זה לזה פתק קצר ומפתה, ותנו אותו ביד ולא בהודעה.",
      "בחרו יחד שיר, ורקדו לאט בסלון כאילו אף אחד לא רואה.",
      "תנו נשיקה במקום שלא נישקתם בו כבר זמן — לחי, מצח, כף יד, צוואר.",
      "תכננו ממש עכשיו ערב הפתעה לבן/בת הזוג לשבוע הקרוב.",
      "החזיקו את הפנים של בן/בת הזוג בידיים ואמרו 'את/ה יפה/ה לי'.",
      "לחשו באוזן משפט שגורם לבן/בת הזוג להרגיש רצוי/ה ואהוב/ה.",
      "הפתיעו את בן/בת הזוג ביוזמה — התחילו ערב רומנטי הרבה לפני שהוא/היא מצפה.",
      "שבו צמודים, חבקו, ונשמו ביחד לאט במשך דקה שלמה.",
      "תארו לבן הזוג איך הייתם רוצים שייראה ערב רומנטי משותף החודש.",
      "תנו נשיקה תוך כדי לחישת מילה מתוקה באוזן.",
      "כבו את האור ורקדו יחד לשיר איטי לאור נר בלבד.",
      "בקשו מבן/בת הזוג לבחור בגד שינה או בושם שהוא/היא הכי אוהב/ת עליכם, ולבשו אותו הערב.",
      "אחזו ביד אחד של השני, עצמו עיניים, והרגישו את הקרבה בלי לדבר.",
      "תארו במילים רגע אינטימי שתרצו לחוות יחד בקרוב.",
      "קבעו יחד 'לילה ללא הפרעות' — טלפונים בצד, רק שניכם עד הבוקר.",
      "סיימו את הסבב בחיבוק ארוך ובנשיקה איטית שנמשכת כמה שרוצים.",
      "הכינו לבן/בת הזוג משקה חם והגישו עם חיוך, בלי בקשה.",
      "כתבו 'קופון אהבה' (למשל ערב סרטים לבחירתו/ה) ותנו אותו עכשיו.",
      "שלחו הודעת בוקר טוב מפתיעה ורומנטית לפני שהשני מתעורר.",
      "צאו לביקור מפתיע במקום שאהבתם ללכת אליו בתחילת ההיכרות.",
      "תנו לבן/בת הזוג לבחור סרט או תוכנית, וצפו יחד צמודים תחת שמיכה אחת.",
      "הכינו יחד קינוח פשוט והאכילו אחד את השני.",
      "כתבו הודעה קטנה והחביאו אותה במקום שבן/בת הזוג ימצא במפתיע.",
      "תנו מחמאה ספונטנית על משהו שהשני לא ציפה שתשימו לב אליו.",
      "הפתיעו בזר פרחים קטן או פרח בודד, בלי סיבה מיוחדת.",
      "שבו יחד לשיחה ללא טלפונים למשך עשר דקות, רק אתם.",
      "תכננו יחד 'לילה תרבותי' — מוזיקה, אוכל וסרט ממדינה שמעניינת את שניכם.",
      "כתבו רשימה של חמישה דברים קטנים שגורמים לכם לחייך אחד מהשני.",
      "תנו לבן/בת הזוג 'יום פינוק' — הוא/היא בוחר/ת, אתם מבצעים.",
      "הפתיעו בארוחת בוקר במיטה בסוף השבוע.",
      "שחקו יחד משחק קופסה או קלפים פשוט, בלי מסכים.",
      "כתבו יחד 'רשימת באקט־ליסט' זוגית לשנה הקרובה.",
      "תנו לבן/בת הזוג לבחור מוזיקה לנסיעה הבאה שלכם ביחד.",
      "הביעו הערכה על משהו שהשני עשה למען הבית או המשפחה השבוע.",
      "תכננו פיקניק קטן בפארק קרוב, גם אם לזמן קצר.",
      "כתבו ותנו רשימה עם עשר סיבות ל'למה אני אוהב/ת אותך'.",
      "הציעו לעשות יחד פעילות גופנית קלה, כמו הליכה או יוגה, כדי להתחבר גם דרך הגוף.",
      "הפתיעו בשיר ששר/ה במיוחד לבן/בת הזוג.",
      "תנו לבן/בת הזוג לבחור פינה בבית ולסדר אותה מחדש ביחד לרגעים רומנטיים.",
      "סיימו את הערב בלחיצת יד ארוכה מתחת לשולחן, כמו בהתחלה.",
    ],
  },
  {
    key: "challenge",
    title: "אתגר זוגי",
    icon: "✨",
    color: C.rose,
    soft: C.pink,
    blurb: "משפטים לדיון ואתגרים קטנים",
    level: 2,
    cards: [
      "'אהבה נמדדת במעשים הקטנים' — עד כמה זה נכון אצלכם? שתפו דוגמה.",
      "'אף פעם לא מאוחר להתחיל מחדש' — איפה בקשר הייתם רוצים להתחיל מחדש?",
      "תכננו יחד דייט מפתיע לחודש הקרוב, כאן ועכשיו.",
      "'התקשורת הכי טובה היא זו שבה גם השתיקה נעימה' — האם זה מתאר אתכם?",
      "בחרו יעד אחד שתרצו להגיע אליו יחד בשנה הקרובה וכתבו אותו.",
      "'זוגיות טובה היא לא היעדר ויכוחים, אלא היכולת לפתור אותם' — שתפו דוגמה.",
      "בחרו מסורת קטנה וחדשה שתרצו להתחיל לקיים כזוג.",
      "'אנחנו צוות' — באיזה תחום בחיים הייתם רוצים לתפקד יותר כצוות?",
      "כתבו ביחד שלושה דברים שתרצו לעשות ביחד השנה.",
      "'החיים הם לא מה שקורה, אלא איך מתמודדים עם זה ביחד' — מתי זה היה נכון אצלכם?",
      "בחרו פעילות חדשה שאף אחד מכם לא ניסה, והתחייבו לנסות אותה החודש.",
      "'להקשיב זו מתנה' — מתי הרגשתם שהקשבתם אחד לשני באמת?",
      "דמיינו את עצמכם בעוד עשרים שנה — איך נראית הזוגיות שלכם?",
      "קבעו זמן קבוע השבוע שיהיה שייך רק לכם השניים.",
      "'כל זוג בונה את השפה הסודית שלו' — מהן המילים או המנהגים הייחודיים לכם?",
      "בחרו מקום שעוד לא ביקרתם בו ותכננו לנסוע אליו יחד.",
      "'מחילה היא מתנה שנותנים גם לעצמך' — יש משהו שתרצו לסלוח עליו היום?",
      "הציעו אחד לשני שינוי קטן שיכול לשפר את היומיום המשותף שלכם.",
      "'גדילה משותפת היא הבסיס לזוגיות שעומדת במבחן הזמן' — איך אתם גדלים יחד?",
      "כתבו ביחד 'כלל זהב' אחד לזוגיות שלכם.",
      "'תודה היא שפה שכל זוגיות צריכה לדבר' — על מה הכי תרצו להודות היום?",
      "בחרו ספר, סרט או הרצאה שתרצו לחוות יחד החודש.",
      "'לפעמים הדבר הכי רומנטי הוא רק להיות נוכחים' — מה זה אומר לכם?",
      "סכמו במשפט אחד את מה שאתם הכי אוהבים בזוגיות שלכם.",
      "'זוגיות בריאה זו לא היעדר קונפליקטים אלא איך פותרים אותם' — תנו דוגמה עדכנית.",
      "תכננו יחד ניסוי חודשי — לנסות תחביב חדש ביחד.",
      "'הכרת תודה יומית משנה זוגיות' — אמרו כל אחד דבר אחד שאתם מודים עליו היום.",
      "בחרו ערך משותף אחד לחזק במיוחד החודש — סבלנות, נדיבות או הקשבה.",
      "'לפעמים הכי חשוב זה לוותר בקטן כדי לנצח בגדול' — מתי זה נכון אצלכם?",
      "תכננו יחד 'אתגר 30 יום' קטן שתרצו לעשות ביחד.",
      "'זוגיות היא גם שותפות עסקית' — איך אתם מנהלים כספים או משימות משותפות?",
      "כתבו יחד תוכנית לחופשה משותפת שתרצו לחסוך אליה.",
      "'תמיד יש עוד ללמוד על בן/בת הזוג' — שאלו שאלה שמעולם לא שאלתם.",
      "'המילים שאנחנו בוחרים בונות את הזוגיות' — יש ביטוי שהייתם רוצים להפסיק להשתמש בו?",
      "בחרו יחד ספר או פודקאסט על זוגיות לצרוך יחד.",
      "'לגדול ביחד לא אומר לגדול זהים' — איך אתם שומרים על זהות אישית בתוך הזוגיות?",
      "הציעו טקס קטן חודשי — ארוחה, טיול — שיהפוך למסורת קבועה.",
      "'שגרה טובה היא לא שיעמום, היא ביטחון' — האם זה תואם את התחושה שלכם?",
      "כתבו יחד שלוש מטרות משותפות לשנה הקרובה.",
      "'קונפליקט בריא מסתיים בהבנה, לא בניצחון' — שתפו דוגמה מהעבר הקרוב.",
      "תכננו יום שלם ביחד בלי מסכים כלל.",
      "'לפעמים המחווה הכי גדולה היא זמן, לא כסף' — איך תשקיעו זמן איכות השבוע?",
      "שתפו חוזקה אחת של הזוגיות שלכם שהייתם רוצים לשמר תמיד.",
      "'שותפות אמיתית נבנית בפרטים הקטנים' — מהו פרט קטן שהייתם רוצים לשפר?",
      "תכננו יחד דרך חדשה להתמודד עם חילוקי דעות בעתיד.",
      "'לצחוק ביחד זו התרופה הכי טובה' — מתי צחקתם ביחד לאחרונה?",
      "כתבו יחד 'חוזה זוגי' לא רשמי עם שלוש הבטחות קטנות אחד לשני.",
      "'האהבה הכי טובה היא זו שבוחרים בה כל יום מחדש' — האם זה מתאר את הבחירה שלכם היום?",
    ],
  },
];

/* ---------------------------------------------------------
   תת-קטגוריה: יותר אינטימי (18+) — מאחורי שער אזהרה
--------------------------------------------------------- */
const INTIMATE_DECK = {
  key: "gestures_intimate",
  title: "יותר אינטימי",
  icon: "🔥",
  color: C.roseDeep,
  soft: C.pink,
  blurb: "לזוגות מעל גיל 18 בלבד",
  level: 4,
  cards: [
    "עסו זה את גב זה בשמן חם לאט ובתשוקה רבה",
      "התנשקו נשיקות עמוקות ומלאות תשוקה על כל חלקי הגוף",
      "חקרו את גוף זה את זה לאט ובנחת עם ידיים ולשון",
      "התחברו זה לזה בתנוחת כפיות עם תנועות איטיות ועמוקות",
      "שחקו במשחק שליטה שבו אחד קובע את כל הפעולות למשך עשר דקות",
      "עסו זה את חזה זה בשמן חם ובמגע עדין",
      "התפשטו זה מול זה לאט ובתאורה רכה ומפתה",
      "התחברו זה לזה בתנוחת הרוכב עם מבט עמוק בעיניים",
      "שחקו משחק תפקידים שבו אתם בני זוג חדשים שפוגשים זה את זה",
      "נשקו זה לזה על הירכיים הפנימיות ועל הבטן לאט",
      "השתמשו באביזר אינטימי חדש שרכשתם יחד מראש",
      "כסו את העיניים של זה והפתיעו אותו במגעים עדינים",
      "התחברו זה לזה בתנוחה עומדת מול הקיר בחיבוק חזק",
      "עסו זה את ישבן זה בנשיקות חמות ועיסוי עמוק",
      "שחקו במשחק שליטה עם קשירת ידיים רכה ומלאת אמון",
      "התחברו זה לזה עם תנועות מעגליות עמוקות ואיטיות",
      "שחקו פנטזיה של פגישה סודית ומלאת תשוקה במלון",
      "ספרו זה לזה במילים מה אתם רוצים שהשני יעשה",
      "התחברו זה לזה בתנוחת כלב עם חיבור חזק ועמוק",
      "עסו זה את זה מבפנים בעדינות רבה ובתשוקה גדולה",
      "רקדו יחד ריקוד חושני ואיטי לפני ההתחברות",
      "התחברו זה לזה בתנוחה צדדית עם חיבוק חם וחזק",
      "שחקו משחק תפקידים של רופא ומטופלת מלא תשוקה",
      "נשמו נשימות חמות על העור של זה לפני כל מגע",
      "תנו לאישה לשלוט בכל הפעולות למשך עשר דקות מלאות",
      "התחברו זה לזה מול מראה גדולה ותסתכלו זה על זה",
      "שחקו פנטזיה של ירח דבש שני מלא אהבה ותשוקה",
      "עסו זה את רגלי זה בנשיקות חמות ועדינות",
      "החליפו בין תנועות מהירות לאיטיות במהלך ההתחברות",
      "שחקו במשחק שליטה שבו אחד נותן הוראות קוליות",
      "התחברו זה לזה עמוק תוך כדי נשיקות רצופות וחמות",
      "התחברו זה לזה בתנוחת גשר עם חדירה עמוקה",
      "מרחו שמן חם על כל הגוף של זה לפני העיסוי",
      "דגדגו זה את זה בעדינות רבה עם אצבעות חמות",
      "שחקו פנטזיה של מקלחת חושנית ומפנקת יחד",
      "התחברו זה לזה כאשר אחד יושב על ברכיים של השני",
      "שחקו משחק תפקידים של מלך ומלכה מלאי תשוקה",
      "החזיקו במותניים של זה והתחברו בתנועות מעגליות",
      "הפתיעו זה את זה עם נרות ריחניים ומוזיקה רכה",
      "שחקו במשחק שליטה שבו אחד מבקש מהשני מה לעשות",
      "נשקו זה לשדיים ולצוואר של זה באהבה רבה",
      "התחברו זה לזה בתנוחה עומדת עם הרמה קלה",
      "סיימו את ההתחברות בחיבוק ארוך ונשיקות עמוקות",
      "שחקו פנטזיה של לילה רומנטי וחושני על חוף הים",
      "התחברו זה לזה בתנוחת שישים ותשע עם מגע הדדי",
      "מרחו שמן חם על הגוף והתחברו לאט ובתשוקה",
    "חפשו אחר אביזר חדש או תנוחה חדשה והזמינו אותו",
  ],
};

const ALL_DECKS = [...CATEGORIES, INTIMATE_DECK];
const LEVELS = Object.fromEntries(ALL_DECKS.map((d) => [d.key, d.level]));

function deckMeta(key) {
  return ALL_DECKS.find((d) => d.key === key);
}

const NO_FOOTER_SCREENS = ["card", "autoCard", "autoChoice"];

const GOLD_TASKS = [
  "צאו השבוע לדייט — גם אם קצר.",
  "כתבו אחד לשני מכתב קצר, ושימרו אותו במקום מיוחד.",
  "קבעו יחד חלום אחד לשנה הקרובה.",
  "הצטלמו יחד סלפי מחייך, כתזכורת לרגע הזה.",
  "בשלו ביחד ארוחה החודש, בלי מסכים בסביבה.",
  "תכננו יחד הפתעה קטנה אחד לשני לשבוע הקרוב.",
  "כתבו רשימה של חמישה דברים שאתם אוהבים זה בזה, ושמרו אותה.",
  "בחרו פעילות ישנה שאהבתם לעשות ביחד, וחזרו עליה החודש.",
];

/* ---------------------------------------------------------
   ערבוב אקראי אמיתי — כל משחק חדש / איפוס מייצר סדר חדש
--------------------------------------------------------- */
function shuffled(arr, seedKey) {
  const a = arr.map((text, i) => ({ id: seedKey + "-" + i, text }));
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function freshDeckState() {
  return Object.fromEntries(ALL_DECKS.map((d) => [d.key, shuffled(d.cards, d.key + "-" + Math.random())]));
}
function freshOpenedState() {
  return Object.fromEntries(ALL_DECKS.map((d) => [d.key, new Set()]));
}

/* ---------------------------------------------------------
   מנוע "מצב אוטומטי מתקדם"
--------------------------------------------------------- */
function targetLevelForStage(stage) {
  return 1 + Math.min(3, Math.floor(stage / 3));
}
function firstUnopenedIndex(deckArr, openedSet) {
  for (let i = 0; i < deckArr.length; i++) if (!openedSet.has(i)) return i;
  return -1;
}
function hasUnopened(deckArr, openedSet) {
  return firstUnopenedIndex(deckArr, openedSet) !== -1;
}
function availableKeys(includeIntimate, deck, opened) {
  const keys = includeIntimate
    ? ["memories", "depth", "challenge", "gestures", "gestures_intimate"]
    : ["memories", "depth", "challenge", "gestures"];
  return keys.filter((k) => hasUnopened(deck[k], opened[k]));
}
function computeWeights(stage, momentumKey, avail) {
  const target = targetLevelForStage(stage);
  const weights = {};
  avail.forEach((k) => {
    const lvl = LEVELS[k];
    let w = 1;
    if (lvl === target) w = 5;
    else if (Math.abs(lvl - target) === 1) w = 2;
    if (k === momentumKey) w += 2;
    weights[k] = w;
  });
  return weights;
}
function pickWeighted(weights) {
  const entries = Object.entries(weights);
  const total = entries.reduce((s, [, w]) => s + w, 0);
  let r = Math.random() * total;
  for (const [k, w] of entries) {
    if (r < w) return k;
    r -= w;
  }
  return entries[0][0];
}

/* =========================================================
   קומפוננטה ראשית
========================================================= */
export default function CouplesGame() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@500;700;900&family=Heebo:wght@300;400;500;700&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const [screen, setScreen] = useState("splash");
  const [names, setNames] = useState({ a: "", b: "" });
  const [turn, setTurn] = useState("a");
  const [deck, setDeck] = useState(freshDeckState);
  const [opened, setOpened] = useState(freshOpenedState);
  const [totalOpened, setTotalOpened] = useState(0);
  const [goldText, setGoldText] = useState("");
  const [afterGoldTarget, setAfterGoldTarget] = useState("categories");

  const [activeDeckKey, setActiveDeckKey] = useState(null);
  const [activeCardIdx, setActiveCardIdx] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [returnToKey, setReturnToKey] = useState(null);

  const [autoTwoCard, setAutoTwoCard] = useState(false);
  const [autoIncludeIntimate, setAutoIncludeIntimate] = useState(false);
  const [autoStage, setAutoStage] = useState(0);
  const [autoMomentum, setAutoMomentum] = useState(null);
  const [autoSingle, setAutoSingle] = useState(null);
  const [autoPair, setAutoPair] = useState(null);

  const playerName = (p) => (p === "a" ? names.a || "בן/בת זוג א׳" : names.b || "בן/בת זוג ב׳");
  const toggleTurn = () => setTurn((t) => (t === "a" ? "b" : "a"));

  function openCategoryBoard(key) {
    setActiveDeckKey(key);
    setReturnToKey(null);
    setScreen("board");
  }

  function backFromBoard() {
    if (returnToKey) {
      const back = returnToKey;
      setReturnToKey(null);
      setActiveDeckKey(back);
      setScreen("board");
    } else {
      setScreen("categories");
    }
  }

  function confirmIntimateGate() {
    setReturnToKey("gestures");
    setActiveDeckKey("gestures_intimate");
    setScreen("board");
  }

  function pickCardFree(idx) {
    setActiveCardIdx(idx);
    setFlipped(false);
    setScreen("card");
    requestAnimationFrame(() => setTimeout(() => setFlipped(true), 60));
  }

  function finishCardFree() {
    const key = activeDeckKey;
    const newOpenedSet = new Set(opened[key]).add(activeCardIdx);
    const newOpened = { ...opened, [key]: newOpenedSet };
    setOpened(newOpened);
    const newTotal = totalOpened + 1;
    setTotalOpened(newTotal);
    toggleTurn();

    const allDone = ALL_DECKS.every((d) => newOpened[d.key].size === d.cards.length);

    if (newTotal % 10 === 0) {
      setGoldText(GOLD_TASKS[Math.floor(Math.random() * GOLD_TASKS.length)]);
      setAfterGoldTarget(allDone ? "end" : "categories");
      setScreen("gold");
      return;
    }
    if (allDone) {
      setScreen("end");
      return;
    }
    setScreen("board");
  }

  function resetDeck(key) {
    setDeck((d) => ({ ...d, [key]: shuffled(deckMeta(key).cards, key + "-" + Math.random()) }));
    setOpened((o) => ({ ...o, [key]: new Set() }));
  }

  function newGame() {
    setDeck(freshDeckState());
    setOpened(freshOpenedState());
    setTotalOpened(0);
    setTurn("a");
    setAutoStage(0);
    setAutoMomentum(null);
    setScreen("modeSelect");
  }

  function requestStartAuto() {
    if (autoIncludeIntimate) {
      setScreen("autoIntimateGate");
    } else {
      setAutoStage(0);
      setAutoMomentum(null);
      drawAutoNext(0, null, opened);
    }
  }

  function confirmAutoIntimateGate() {
    setAutoStage(0);
    setAutoMomentum(null);
    drawAutoNext(0, null, opened);
  }

  function drawAutoNext(stage, momentum, openedState) {
    const avail = availableKeys(autoIncludeIntimate, deck, openedState);
    if (avail.length === 0) {
      setScreen("end");
      return;
    }
    if (autoTwoCard) {
      const weights = computeWeights(stage, momentum, avail);
      const k1 = pickWeighted(weights);
      const remaining = { ...weights };
      delete remaining[k1];
      const k2 = Object.keys(remaining).length > 0 ? pickWeighted(remaining) : k1;

      if (k2 === k1) {
        const idxs = [];
        deck[k1].forEach((c, i) => {
          if (!openedState[k1].has(i)) idxs.push(i);
        });
        if (idxs.length >= 2) {
          setAutoPair([
            { key: k1, idx: idxs[0] },
            { key: k1, idx: idxs[1] },
          ]);
          setScreen("autoChoice");
          return;
        }
        setAutoSingle({ key: k1, idx: idxs[0] });
        setFlipped(true);
        setScreen("autoCard");
        return;
      }
      setAutoPair([
        { key: k1, idx: firstUnopenedIndex(deck[k1], openedState[k1]) },
        { key: k2, idx: firstUnopenedIndex(deck[k2], openedState[k2]) },
      ]);
      setScreen("autoChoice");
    } else {
      const weights = computeWeights(stage, momentum, avail);
      const key = pickWeighted(weights);
      setAutoSingle({ key, idx: firstUnopenedIndex(deck[key], openedState[key]) });
      setFlipped(true);
      setScreen("autoCard");
    }
  }

function chooseFromPair(chosen) {
  setAutoSingle(chosen);
  setFlipped(true);
  setScreen("autoCard");

  // סימון גם את הקלף שלא נבחר כ"נפתח"
  const other = autoPair.find(p => p.idx !== chosen.idx && p.key === chosen.key);
  if (other) {
    const newOpenedSet = new Set(opened[other.key]).add(other.idx);
    setOpened(prev => ({ ...prev, [other.key]: newOpenedSet }));
  }
}

  function finishAutoCard() {
    const { key, idx } = autoSingle;
    const newOpenedSet = new Set(opened[key]).add(idx);
    const openedSnapshot = { ...opened, [key]: newOpenedSet };
    setOpened(openedSnapshot);

    const newStage = autoStage + 1;
    const newTotal = totalOpened + 1;
    setTotalOpened(newTotal);
    setAutoStage(newStage);
    setAutoMomentum(key);
    toggleTurn();

    const avail = availableKeys(autoIncludeIntimate, deck, openedSnapshot);

    if (newTotal % 10 === 0) {
      setGoldText(GOLD_TASKS[Math.floor(Math.random() * GOLD_TASKS.length)]);
      setAfterGoldTarget(avail.length === 0 ? "end" : "autoNext");
      setScreen("gold");
      return;
    }
    if (avail.length === 0) {
      setScreen("end");
      return;
    }
    drawAutoNext(newStage, key, openedSnapshot);
  }

  function afterGoldContinue() {
    if (afterGoldTarget === "autoNext") {
      drawAutoNext(autoStage, autoMomentum, opened);
      return;
    }
    if (afterGoldTarget === "end") {
      setScreen("end");
      return;
    }
    setScreen("categories");
  }

  return (
    <div
      dir="rtl"
      style={{
        fontFamily: "'Heebo', sans-serif",
        background: `radial-gradient(circle at 20% 0%, ${C.bgSoft}, ${C.bg} 55%)`,
        minHeight: "100vh",
        color: C.ink,
        display: "flex",
        justifyContent: "center",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", maxWidth: 480, position: "relative" }}>
        <Hearts />

        {screen === "splash" && <Splash onStart={() => setScreen("players")} />}

        {screen === "players" && (
          <Players names={names} setNames={setNames} onStart={() => setScreen("modeSelect")} />
        )}

        {screen === "modeSelect" && (
          <ModeSelect onFree={() => setScreen("categories")} onAuto={() => setScreen("autoSettings")} />
        )}

        {screen === "autoSettings" && (
          <AutoSettings
            twoCard={autoTwoCard}
            setTwoCard={setAutoTwoCard}
            includeIntimate={autoIncludeIntimate}
            setIncludeIntimate={setAutoIncludeIntimate}
            onBack={() => setScreen("modeSelect")}
            onStart={requestStartAuto}
          />
        )}

        {screen === "autoIntimateGate" && (
          <IntimateGate
            onCancel={() => {
              setAutoIncludeIntimate(false);
              setScreen("autoSettings");
            }}
            onConfirm={confirmAutoIntimateGate}
          />
        )}

        {screen === "intimateGate" && (
          <IntimateGate onCancel={() => setScreen("board")} onConfirm={confirmIntimateGate} />
        )}

        {screen === "categories" && (
          <Categories opened={opened} onOpen={openCategoryBoard} turnLabel={playerName(turn)} />
        )}

        {screen === "board" && activeDeckKey && (
          <Board
            meta={deckMeta(activeDeckKey)}
            deckArr={deck[activeDeckKey]}
            openedSet={opened[activeDeckKey]}
            onPick={pickCardFree}
            onBack={backFromBoard}
            onReset={() => resetDeck(activeDeckKey)}
            turnLabel={playerName(turn)}
            showIntimateButton={activeDeckKey === "gestures"}
            onOpenIntimate={() => setScreen("intimateGate")}
          />
        )}

        {screen === "card" && activeDeckKey && activeCardIdx !== null && (
          <CardView
            meta={deckMeta(activeDeckKey)}
            card={deck[activeDeckKey][activeCardIdx]}
            flipped={flipped}
            onFinish={finishCardFree}
            turnLabel={playerName(turn)}
          />
        )}

        {screen === "autoCard" && autoSingle && (
          <CardView
            meta={deckMeta(autoSingle.key)}
            card={deck[autoSingle.key][autoSingle.idx]}
            flipped={flipped}
            onFinish={finishAutoCard}
            turnLabel={playerName(turn)}
            autoBadge
          />
        )}

        {screen === "autoChoice" && autoPair && (
          <AutoChoice deck={deck} pair={autoPair} onChoose={chooseFromPair} turnLabel={playerName(turn)} />
        )}

        {screen === "gold" && <GoldCard text={goldText} onContinue={afterGoldContinue} />}

        {screen === "end" && <EndScreen onNewGame={newGame} />}

        {!NO_FOOTER_SCREENS.includes(screen) && <Footer />}
      </div>
    </div>
  );
}

/* ----------------------------- רכיבי עזר ----------------------------- */

function Hearts() {
  const positions = [
    { top: "6%", left: "8%", size: 14, op: 0.18 },
    { top: "14%", right: "10%", size: 10, op: 0.14 },
    { top: "40%", left: "2%", size: 12, op: 0.12 },
    { bottom: "10%", right: "6%", size: 16, op: 0.16 },
    { bottom: "30%", left: "12%", size: 9, op: 0.12 },
  ];
  return (
    <>
      {positions.map((p, i) => (
        <span
          key={i}
          style={{
            position: "fixed",
            top: p.top,
            bottom: p.bottom,
            left: p.left,
            right: p.right,
            fontSize: p.size * 2,
            opacity: p.op,
            color: C.rose,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          ❤
        </span>
      ))}
    </>
  );
}

function Panel({ children, style }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.85)",
        borderRadius: 28,
        padding: "32px 24px",
        boxShadow: "0 12px 40px rgba(182,92,115,0.12)",
        border: `1px solid ${C.pink}55`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function BigButton({ children, onClick, color = C.rose, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "16px 20px",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "'Heebo', sans-serif",
        color: C.white,
        background: `linear-gradient(135deg, ${color}, ${color}cc)`,
        border: "none",
        borderRadius: 18,
        cursor: "pointer",
        boxShadow: `0 8px 20px ${color}55`,
        ...style,
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {children}
    </button>
  );
}

const navBtnStyle = {
  border: "none",
  background: C.white,
  borderRadius: 999,
  padding: "8px 14px",
  fontSize: 13,
  color: C.inkSoft,
  cursor: "pointer",
  boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "12px 14px",
  marginTop: 6,
  marginBottom: 16,
  borderRadius: 14,
  border: `1.5px solid ${C.pink}`,
  fontSize: 16,
  fontFamily: "'Heebo', sans-serif",
  outline: "none",
  background: C.white,
};

function Splash({ onStart }) {
  return (
    <div style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Panel style={{ textAlign: "center" }}>
        <div style={{ fontSize: 52, marginBottom: 8 }}>❤</div>
        <h1
          style={{
            fontFamily: "'Frank Ruhl Libre', serif",
            fontWeight: 900,
            fontSize: 34,
            margin: "0 0 8px",
            color: C.rose,
          }}
        >
          קרוב יותר
        </h1>
        <p style={{ color: C.inkSoft, fontSize: 16, lineHeight: 1.6, margin: "0 0 28px" }}>
          משחק קלפים זוגי קטן,
          <br />
          לרגעים גדולים ביחד.
        </p>
        <BigButton onClick={onStart}>התחל משחק</BigButton>
      </Panel>
    </div>
  );
}

function Players({ names, setNames, onStart }) {
  return (
    <div style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Panel style={{ width: "100%" }}>
        <h2
          style={{
            fontFamily: "'Frank Ruhl Libre', serif",
            color: C.rose,
            fontSize: 24,
            marginTop: 0,
            textAlign: "center",
          }}
        >
          מי משחק היום?
        </h2>
        <p style={{ color: C.inkSoft, textAlign: "center", marginTop: -6, marginBottom: 24, fontSize: 14 }}>
          אפשר להשאיר ריק ולהשתמש בשם ברירת מחדל
        </p>
        <label style={{ fontSize: 14, color: C.inkSoft }}>בן/בת זוג א׳</label>
        <input
          value={names.a}
          onChange={(e) => setNames({ ...names, a: e.target.value })}
          placeholder="לדוגמה: נועה"
          style={inputStyle}
        />
        <label style={{ fontSize: 14, color: C.inkSoft }}>בן/בת זוג ב׳</label>
        <input
          value={names.b}
          onChange={(e) => setNames({ ...names, b: e.target.value })}
          placeholder="לדוגמה: איתי"
          style={inputStyle}
        />
        <div style={{ marginTop: 20 }}>
          <BigButton onClick={onStart}>המשך</BigButton>
        </div>
      </Panel>
    </div>
  );
}

function ModeSelect({ onFree, onAuto }) {
  return (
    <div style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Panel style={{ width: "100%", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", color: C.rose, fontSize: 24, marginTop: 0 }}>
          איך תרצו לשחק?
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 20 }}>
          <button
            onClick={onFree}
            style={{
              border: `2px solid ${C.pink}`,
              background: C.white,
              borderRadius: 20,
              padding: "18px 16px",
              cursor: "pointer",
              textAlign: "right",
            }}
          >
            <div style={{ fontSize: 22, marginBottom: 4 }}>🎴 משחק חופשי</div>
            <div style={{ fontSize: 13, color: C.inkSoft }}>בוחרים קטגוריה בעצמכם בכל תור</div>
          </button>
          <button
            onClick={onAuto}
            style={{
              border: `2px solid ${C.goldSoft}`,
              background: C.white,
              borderRadius: 20,
              padding: "18px 16px",
              cursor: "pointer",
              textAlign: "right",
            }}
          >
            <div style={{ fontSize: 22, marginBottom: 4 }}>🌊 מצב אוטומטי מתקדם</div>
            <div style={{ fontSize: 13, color: C.inkSoft }}>רצף קלפים חכם מכל הקטגוריות, מתחמם בהדרגה</div>
          </button>
        </div>
      </Panel>
    </div>
  );
}

function ToggleRow({ label, sub, value, onChange, color = C.rose }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: C.white,
        borderRadius: 16,
        padding: "14px 16px",
        marginBottom: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ textAlign: "right" }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: C.ink }}>{label}</div>
        {sub && <div style={{ fontSize: 12, color: C.inkSoft, marginTop: 2 }}>{sub}</div>}
      </div>
      <button
        onClick={() => onChange(!value)}
        style={{
          width: 50,
          height: 28,
          borderRadius: 999,
          border: "none",
          cursor: "pointer",
          background: value ? color : "#E5DDE0",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 3,
            right: value ? 3 : 25,
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: C.white,
            transition: "right 0.2s ease",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        />
      </button>
    </div>
  );
}

function AutoSettings({ twoCard, setTwoCard, includeIntimate, setIncludeIntimate, onBack, onStart }) {
  return (
    <div style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Panel style={{ width: "100%" }}>
        <button onClick={onBack} style={{ ...navBtnStyle, marginBottom: 14 }}>
          → חזרה
        </button>
        <h2
          style={{
            fontFamily: "'Frank Ruhl Libre', serif",
            color: C.rose,
            fontSize: 22,
            marginTop: 0,
            textAlign: "center",
          }}
        >
          הגדרות מצב אוטומטי
        </h2>
        <p style={{ fontSize: 13, color: C.inkSoft, textAlign: "center", marginTop: -6, marginBottom: 20 }}>
          הקלפים יזרמו בעצמם, בסדר הגיוני שמתחמם בהדרגה
        </p>
        <ToggleRow
          label="2 קלפים לבחירה בכל תור"
          sub="תבחרו ביחד מה שמתאים לכם יותר באותו רגע"
          value={twoCard}
          onChange={setTwoCard}
        />
        <ToggleRow
          label="לכלול קלפי 'יותר אינטימי' (18+)"
          sub="ישולבו בהדרגה ככל שהרצף מתחמם"
          value={includeIntimate}
          onChange={setIncludeIntimate}
          color={C.roseDeep}
        />
        <div style={{ marginTop: 18 }}>
          <BigButton onClick={onStart} color={C.gold}>
            התחילו רצף
          </BigButton>
        </div>
      </Panel>
    </div>
  );
}

function IntimateGate({ onCancel, onConfirm }) {
  return (
    <div style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Panel style={{ textAlign: "center", border: `2px solid ${C.roseDeep}` }}>
        <div style={{ fontSize: 40, marginBottom: 10 }}>🔥</div>
        <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", color: C.roseDeep, fontSize: 22, margin: "0 0 10px" }}>
          תוכן מעל גיל 18
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: C.ink, marginBottom: 22 }}>
          הקטגוריה הזו מיועדת לזוגות בגירים בלבד, וכוללת קלפים אינטימיים ומרעננים
          יותר. בלחיצה על "אנחנו מאשרים" אתם מאשרים ששניכם מעל גיל 18 ומרגישים
          בנוח להמשיך.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <BigButton onClick={onConfirm} color={C.roseDeep}>
            אנחנו מאשרים, בואו נמשיך
          </BigButton>
          <button onClick={onCancel} style={{ ...navBtnStyle, padding: "10px 14px" }}>
            ביטול, חזרה אחורה
          </button>
        </div>
      </Panel>
    </div>
  );
}

function Categories({ opened, onOpen, turnLabel }) {
  return (
    <div style={{ paddingTop: 24 }}>
      <div style={{ textAlign: "center", marginBottom: 18 }}>
        <div
          style={{
            display: "inline-block",
            background: C.white,
            borderRadius: 999,
            padding: "8px 18px",
            fontSize: 14,
            color: C.rose,
            fontWeight: 700,
            boxShadow: "0 4px 14px rgba(182,92,115,0.1)",
          }}
        >
          תורו של {turnLabel} ❤
        </div>
      </div>
      <h2
        style={{
          fontFamily: "'Frank Ruhl Libre', serif",
          color: C.ink,
          textAlign: "center",
          fontSize: 24,
          marginBottom: 22,
        }}
      >
        בחרו קטגוריה
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {CATEGORIES.map((c) => {
          const total = c.cards.length;
          const done = opened[c.key].size;
          return (
            <button
              key={c.key}
              onClick={() => onOpen(c.key)}
              style={{
                border: "none",
                borderRadius: 22,
                padding: "22px 12px",
                background: `linear-gradient(160deg, ${c.soft}, ${C.white})`,
                cursor: "pointer",
                textAlign: "center",
                boxShadow: `0 8px 24px ${c.color}33`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span style={{ fontSize: 30 }}>{c.icon}</span>
              <span style={{ fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 700, fontSize: 16, color: C.ink }}>
                {c.title}
              </span>
              <span style={{ fontSize: 12, color: C.inkSoft }}>{c.blurb}</span>
              <span
                style={{
                  marginTop: 6,
                  fontSize: 12,
                  fontWeight: 700,
                  color: c.color,
                  background: C.white,
                  borderRadius: 999,
                  padding: "3px 10px",
                }}
              >
                {done} / {total} נפתחו
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Board({ meta, deckArr, openedSet, onPick, onBack, onReset, turnLabel, showIntimateButton, onOpenIntimate }) {
  return (
    <div style={{ paddingTop: 18, paddingBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <button onClick={onBack} style={navBtnStyle}>
          → קטגוריות
        </button>
        <button onClick={onReset} style={navBtnStyle}>
          איפוס קטגוריה
        </button>
      </div>

      <div style={{ textAlign: "center", marginBottom: 14 }}>
        <div
          style={{
            display: "inline-block",
            background: C.white,
            borderRadius: 999,
            padding: "7px 16px",
            fontSize: 13,
            color: meta.color,
            fontWeight: 700,
            boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
          }}
        >
          תורו של {turnLabel} ❤
        </div>
      </div>

      <h2
        style={{
          fontFamily: "'Frank Ruhl Libre', serif",
          textAlign: "center",
          color: C.ink,
          fontSize: 22,
          margin: "0 0 16px",
        }}
      >
        {meta.icon} {meta.title}
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
        {deckArr.map((card, idx) => {
          const isOpen = openedSet.has(idx);
          return (
            <button
              key={card.id}
              onClick={() => !isOpen && onPick(idx)}
              disabled={isOpen}
              style={{
                aspectRatio: "3 / 4",
                borderRadius: 12,
                border: "none",
                cursor: isOpen ? "default" : "pointer",
                background: isOpen ? `${meta.soft}55` : `linear-gradient(155deg, ${meta.color}, ${meta.color}cc)`,
                boxShadow: isOpen ? "none" : `0 6px 14px ${meta.color}55`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                color: isOpen ? `${meta.color}66` : C.white,
                opacity: isOpen ? 0.55 : 1,
              }}
            >
              {isOpen ? "✓" : meta.icon}
            </button>
          );
        })}
      </div>

      {showIntimateButton && (
        <div style={{ marginTop: 22 }}>
          <button
            onClick={onOpenIntimate}
            style={{
              width: "100%",
              border: `2px dashed ${C.roseDeep}`,
              background: `${C.pink}33`,
              borderRadius: 18,
              padding: "14px",
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 700,
              color: C.roseDeep,
            }}
          >
            🔥 יותר אינטימי (18+)
          </button>
        </div>
      )}
    </div>
  );
}

function CardView({ meta, card, flipped, onFinish, turnLabel, autoBadge }) {
  return (
    <div style={{ minHeight: "85vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          fontSize: 14,
          color: meta.color,
          fontWeight: 700,
          marginBottom: 18,
          background: C.white,
          borderRadius: 999,
          padding: "7px 16px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
        }}
      >
        תורו של {turnLabel} ❤{autoBadge ? " · רצף אוטומטי" : ""}
      </div>

      <div style={{ perspective: 1200, width: "100%", maxWidth: 320, height: 420 }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            transition: "transform 0.65s cubic-bezier(.4,.2,.2,1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              borderRadius: 26,
              background: `linear-gradient(160deg, ${meta.color}, ${meta.color}aa)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 56,
              color: "#ffffff99",
              boxShadow: `0 16px 32px ${meta.color}55`,
            }}
          >
            {meta.icon}
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              borderRadius: 26,
              background: C.white,
              border: `2px solid ${meta.soft}`,
              boxShadow: `0 16px 32px ${meta.color}33`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 28,
              boxSizing: "border-box",
              textAlign: "center",
              gap: 18,
            }}
          >
            <span style={{ fontSize: 26 }}>{meta.icon}</span>
            <p
              style={{
                fontFamily: "'Frank Ruhl Libre', serif",
                fontSize: 20,
                lineHeight: 1.6,
                color: C.ink,
                margin: 0,
              }}
            >
              {card.text}
            </p>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", maxWidth: 320, marginTop: 28 }}>
        <BigButton onClick={onFinish} color={meta.color}>
          ✅ סיימנו
        </BigButton>
      </div>
    </div>
  );
}

function AutoChoice({ deck, pair, onChoose, turnLabel }) {
  return (
    <div style={{ minHeight: "85vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          fontSize: 14,
          color: C.rose,
          fontWeight: 700,
          marginBottom: 16,
          background: C.white,
          borderRadius: 999,
          padding: "7px 16px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
        }}
      >
        תורו של {turnLabel} · בחרו קלף
      </div>
      <p style={{ fontSize: 13, color: C.inkSoft, marginBottom: 16, textAlign: "center" }}>
        שני קלפים לבחירה — קחו את מה שמתאים לכם יותר עכשיו
      </p>
      <div style={{ display: "flex", gap: 12, width: "100%" }}>
        {pair.map((p, i) => {
          const meta = deckMeta(p.key);
          const card = deck[p.key][p.idx];
          return (
            <button
              key={i}
              onClick={() => onChoose(p)}
              style={{
                flex: 1,
                border: `2px solid ${meta.soft}`,
                background: C.white,
                borderRadius: 20,
                padding: "18px 12px",
                cursor: "pointer",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                minHeight: 220,
                boxShadow: `0 8px 20px ${meta.color}33`,
              }}
            >
              <span style={{ fontSize: 24 }}>{meta.icon}</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: meta.color }}>{meta.title}</span>
              <p
                style={{
                  fontFamily: "'Frank Ruhl Libre', serif",
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: C.ink,
                  margin: 0,
                }}
              >
                {card.text}
              </p>
              <span
                style={{
                  marginTop: "auto",
                  fontSize: 12,
                  fontWeight: 700,
                  color: C.white,
                  background: meta.color,
                  borderRadius: 999,
                  padding: "6px 14px",
                }}
              >
                בוחרים את זה
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function GoldCard({ text, onContinue }) {
  return (
    <div style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Panel
        style={{
          textAlign: "center",
          background: `linear-gradient(160deg, ${C.goldSoft}, ${C.white})`,
          border: `2px solid ${C.gold}`,
        }}
      >
        <div style={{ fontSize: 44, marginBottom: 6 }}>✨</div>
        <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", color: C.gold, fontSize: 24, margin: "0 0 12px" }}>
          קלף זהב!
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: C.ink, marginBottom: 24 }}>{text}</p>
        <BigButton onClick={onContinue} color={C.gold}>
          קדימה, ממשיכים
        </BigButton>
      </Panel>
    </div>
  );
}

function EndScreen({ onNewGame }) {
  return (
    <div style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Panel style={{ textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 10 }}>❤✨❤</div>
        <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", color: C.rose, fontSize: 26, margin: "0 0 14px" }}>
          כל הכבוד
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: C.ink, marginBottom: 26 }}>
          הקדשתם זמן אחד לשנייה.
          <br />
          זו המתנה הכי יפה שאפשר לתת לאהבה.
        </p>
        <BigButton onClick={onNewGame}>משחק חדש</BigButton>
      </Panel>
    </div>
  );
}

const BIT_NUMBER = "0526017494";
const SHARE_TEXT = "מצאתי משחק קלפים זוגי מקסים בשם 'קרוב יותר' — קרבה, שיחה ואהבה. תנסו יחד ❤";

function Footer() {
  const [copied, setCopied] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const currentUrl = window.location.href || "";
  const shareText = "קרוב יותר - משחק קלפים זוגי מקסים לחיזוק הקשר והאהבה ❤";

  const shareTo = (platform) => {
    let url = '';
    switch(platform) {
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareText + "\n" + currentUrl)}`;
        break;
      case 'telegram':
        url = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(currentUrl).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        });
        return;
    }
    if (url) window.open(url, '_blank');
  };

  return (
    <div style={{ marginTop: 32, marginBottom: 24, padding: "20px", borderRadius: 20, background: "rgba(255,255,255,0.9)", border: `1px solid ${C.pink}55`, textAlign: "center" }}>
      
      <button
        onClick={() => setShowShareOptions(!showShareOptions)}
        style={{
          padding: "12px 28px",
          borderRadius: 999,
          border: "none",
          background: C.pink,
          color: C.roseDeep,
          fontWeight: 700,
          fontSize: 15,
          cursor: "pointer",
          marginBottom: 16,
        }}
      >
        💛 שתפו את המשחק
      </button>

      {/* כפתורים נוספים - מופיעים רק אחרי לחיצה */}
      {showShareOptions && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 20 }}>
          <button onClick={() => shareTo('whatsapp')} style={shareBtnStyle}>📱 וואטסאפ</button>
          <button onClick={() => shareTo('telegram')} style={shareBtnStyle}>✈️ טלגרם</button>
          <button onClick={() => shareTo('facebook')} style={shareBtnStyle}>📘 פייסבוק</button>
          <button onClick={() => shareTo('twitter')} style={shareBtnStyle}>𝕏 X</button>
          <button onClick={() => shareTo('copy')} style={shareBtnStyle}>
            {copied ? "✅ הועתק!" : "📋 העתק קישור"}
          </button>
        </div>
      )}

          {/* תרומה בביט */}
      <p style={{ fontSize: 13.5, color: C.inkSoft, margin: "12px 0 16px", lineHeight: 1.5 }}>
        אם אהבתם - נשמח לתרומה לתמיכה בפיתוח האפליקציה<br />
        <b style={{ color: C.rose }}>0526017494</b><br />
        תודה!
      </p>

      {/* טקסט הלכתי */}
      <div style={{ fontSize: 12.5, lineHeight: 1.6, color: "#555", paddingTop: 12, borderTop: `1px solid ${C.pink}30` }}>
        <p>הבהרה: יתכן וחלק מההצעות אינן בהתאם להלכה או רק בהיתר לפי שיטות מסוימות. במקרה של ספק - יש לברר את ההלכה. אין לסמוך על האתר מבחינה הלכתית.</p>
        <p style={{ marginTop: 10, fontWeight: 600, color: C.rose }}>ברכה והצלחה בחיזוק הקשר והאהבה בע"ה.</p>
      </div>
    </div>
  );
}

const shareBtnStyle = {
  padding: "9px 18px",
  borderRadius: 999,
  border: "none",
  background: C.pink,
  color: C.roseDeep,
  fontWeight: 600,
  fontSize: 13.5,
  cursor: "pointer",
};