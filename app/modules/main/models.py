from app import db


class Course(db.Model):
    __tablename__ = 'course'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), index=True, nullable=False)
    short_description = db.Column(db.String(255))
    description = db.Column(db.Text)
    # date_start
    # duration
    teacher_id = db.Column(db.Integer, db.ForeignKey('teacher.id'), nullable=False)

    def __repr__(self):
        return self.title


class Teacher(db.Model):
    __tablename__ = 'teacher'
    id = db.Column(db.Integer, primary_key=True)
    surname = db.Column(db.String(255), index=True)
    name = db.Column(db.String(255), index=True)
    patronymic = db.Column(db.String(255), index=True)
    description = db.Column(db.Text, index=True)
    courses = db.relationship(Course, backref='teacher_id', lazy='dynamic')

    def full_name(self):
        """Полное имя преподавателя"""
        return f'{self.surname} {self.name} {self.patronymic}'

    def __repr__(self):
        return self.title


class Member(db.Model):
    __tablename__ = 'member'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), index=True)
    # telephone =
    # email =
    courses = db.relationship(Course, backref='teacher_id', lazy='dynamic')

    def __repr__(self):
        return self.name
